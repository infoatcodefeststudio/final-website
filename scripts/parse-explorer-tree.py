"""Parse Hercules browse snapshot Explorer tree into file paths."""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SNAP = ROOT / ".explorer-snap.json"

FILE_EXTENSIONS = (
    ".ts", ".tsx", ".js", ".mjs", ".json", ".css", ".html", ".yaml", ".yml",
    ".md", ".svg", ".png", ".jpg", ".jpeg", ".webp", ".ico", ".gitignore",
    ".prettierignore", ".ignore", ".env", ".d.ts",
)
SPECIAL_FILES = {".git-keep", ".gitkeep"}


def is_file(name: str) -> bool:
    base = name.split(" [")[0].strip()
    if base in SPECIAL_FILES or base.startswith(".") and "." in base[1:]:
        # .gitignore, .prettierignore, .ignore
        if base.count(".") >= 1 and not base.endswith(("/", "\\")):
            if any(base.endswith(ext) for ext in FILE_EXTENSIONS):
                return True
            if base in (".gitignore", ".ignore", ".prettierignore", ".git-keep"):
                return True
    return any(base.endswith(ext) for ext in FILE_EXTENSIONS)


def parse_tree(tree: str) -> list[str]:
    lines = tree.split("\n")
    in_explorer = False
    explorer_depth = None
    stack: list[tuple[int, str]] = []
    paths: list[str] = []

    for line in lines:
        if "heading: Explorer" in line:
            in_explorer = True
            continue
        if not in_explorer:
            continue
        if "treeitem:" in line:
            m = re.match(r"(\s*)\[[^\]]+\] treeitem: (.+)", line)
            if not m:
                continue
            indent = len(m.group(1))
            label = m.group(2).split(" [")[0].strip()
            if explorer_depth is None:
                explorer_depth = indent
            depth = (indent - explorer_depth) // 2
            while len(stack) > depth:
                stack.pop()
            if depth == len(stack):
                stack.append(label)
            else:
                stack = stack[:depth] + [label]
            rel = "/".join(stack)
            paths.append(rel)
            continue
        # Leave explorer when we hit editor pane after tree
        if in_explorer and explorer_depth is not None and "textbox: Editor content" in line:
            break

    return paths


def main() -> None:
    raw = SNAP.read_text(encoding="utf-8-sig")
    data = json.loads(raw)
    tree = data["tree"]
    paths = parse_tree(tree)
    folders = set()
    files = []
    for p in paths:
        if is_file(p.split("/")[-1]):
            files.append(p)
            parent = "/".join(p.split("/")[:-1])
            if parent:
                folders.add(parent)
        else:
            folders.add(p)

    out = ROOT / ".explorer-paths.txt"
    with out.open("w", encoding="utf-8") as f:
        for d in sorted(folders):
            f.write(f"dir:{d}\n")
        for fp in sorted(files):
            f.write(f"file:{fp}\n")

    print(f"folders={len(folders)} files={len(files)}")
    for d in sorted(folders)[:30]:
        print(f"  [dir] {d}")
    if len(folders) > 30:
        print(f"  ... +{len(folders)-30} more dirs")
    for fp in sorted(files)[:20]:
        print(f"  [file] {fp}")


if __name__ == "__main__":
    main()

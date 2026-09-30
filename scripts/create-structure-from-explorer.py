"""Build local folder/file tree from Hercules Explorer snapshot order."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SNAP = ROOT / ".explorer-snap.json"

FILE_EXTENSIONS = (
    ".ts", ".tsx", ".js", ".mjs", ".json", ".css", ".html", ".yaml", ".yml",
    ".md", ".svg", ".png", ".jpg", ".jpeg", ".webp", ".ico", ".d.ts",
)
SPECIAL_FILES = {".git-keep", ".gitignore", ".ignore", ".prettierignore"}


def is_file(name: str) -> bool:
    if name in SPECIAL_FILES:
        return True
    return any(name.endswith(ext) for ext in FILE_EXTENSIONS)


def labels_from_snapshot() -> list[str]:
    data = json.loads(SNAP.read_text(encoding="utf-8-sig"))
    labels: list[str] = []
    for line in data["tree"].split("\n"):
        if "treeitem:" in line:
            labels.append(line.split("treeitem: ", 1)[1].split(" [")[0].strip())
    return labels


def paths_from_labels(labels: list[str]) -> tuple[set[str], list[str]]:
    dirs: set[str] = set()
    files: list[str] = []

    root_markers = (".gitignore",)
    try:
        root_start = next(i for i, lb in enumerate(labels) if lb in root_markers)
    except StopIteration:
        root_start = len(labels)

    stack: list[str] = []

    for i, label in enumerate(labels):
        if i >= root_start:
            if is_file(label):
                files.append(label.replace("/", "\\") if "/" in label else label)
            continue

        if label == "convex":
            stack = ["convex"]
            dirs.add("convex")
            continue
        if label == "public":
            stack = ["public"]
            dirs.add("public")
            continue
        if label == "src":
            stack = ["src"]
            dirs.add("src")
            continue
        if stack == ["convex"] and label == "_generated":
            stack = ["convex", "_generated"]
            dirs.add("convex/_generated")
            continue
        if stack[:1] == ["src"] and label in ("components", "hooks", "lib", "pages"):
            stack = ["src", label]
            dirs.add(f"src/{label}")
            continue

        if is_file(label):
            parts = list(stack)
            if parts and parts[-1] == "_generated":
                parts.pop()
            if parts[:1] == ["src"] and len(parts) > 1:
                parts = ["src"]
            rel = "/".join(parts + [label])
            files.append(rel)
            continue

        # Unknown folder segment — treat as directory under current stack
        stack = stack + [label]
        dirs.add("/".join(stack))

    return dirs, files


def materialize(dirs: set[str], files: list[str]) -> None:
    for d in sorted(dirs):
        (ROOT / d).mkdir(parents=True, exist_ok=True)
    for f in sorted(set(files)):
        path = ROOT / f
        path.parent.mkdir(parents=True, exist_ok=True)
        if not path.exists():
            path.write_text("", encoding="utf-8")


def main() -> None:
    labels = labels_from_snapshot()
    dirs, files = paths_from_labels(labels)
    materialize(dirs, files)
    print(f"Created {len(dirs)} directories and {len(set(files))} empty files under {ROOT}")
    for d in sorted(dirs):
        print(f"  dir  {d}")
    for f in sorted(set(files)):
        print(f"  file {f}")


if __name__ == "__main__":
    main()

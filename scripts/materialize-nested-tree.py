"""Fetch full codebase tree from Hercules list_files API and create local structure."""
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WEBSITE_ID = "01M3P54TJ2G0XSGEWEJCJ7HA9F"

EVAL = (
    "fetch('/api/v1/website/dev/list_files',{method:'POST',headers:"
    "{'Content-Type':'application/json'},body:JSON.stringify({websiteId:'"
    + WEBSITE_ID
    + "',sessionName:'main'})}).then(r=>r.text())"
)


def fetch_tree_json() -> dict:
    raw_path = ROOT / ".hercules-tree-raw.json"
    if raw_path.exists():
        wrapper = json.loads(raw_path.read_text(encoding="utf-8-sig"))
        return json.loads(wrapper["result"])

    proc = subprocess.run(
        ["browse.cmd", "eval", "--session", "hercules-copy", EVAL],
        capture_output=True,
        text=True,
        check=False,
    )
    out = proc.stdout + proc.stderr
    start = out.find("{")
    end = out.rfind("}")
    if start >= 0 and end > start:
        wrapper = json.loads(out[start : end + 1])
        return json.loads(wrapper["result"])
    raise RuntimeError("Could not parse list_files response from browse eval")


def walk(nodes: list, dirs: set[str], files: list[str]) -> None:
    for node in nodes:
        path = node["path"].replace("\\", "/").lstrip("/")
        if node["type"] == "directory":
            if path and path != ".":
                dirs.add(path)
            walk(node.get("children") or [], dirs, files)
        elif node["type"] == "file":
            files.append(path)


def materialize(dirs: set[str], files: list[str]) -> None:
    for d in sorted(dirs):
        (ROOT / d).mkdir(parents=True, exist_ok=True)
    for f in sorted(set(files)):
        path = ROOT / f
        path.parent.mkdir(parents=True, exist_ok=True)
        if not path.exists():
            path.write_text("", encoding="utf-8")


def main() -> None:
    data = fetch_tree_json()
    dirs: set[str] = set()
    files: list[str] = []
    nodes = data.get("tree", [])
    if nodes and nodes[0].get("name") == "app":
        nodes = nodes[0].get("children") or []
    walk(nodes, dirs, files)
    # API wraps project under virtual "app" node; paths on children are already relative
    materialize(dirs, files)
    print(f"Directories: {len(dirs)}")
    print(f"Files: {len(set(files))}")
    for d in sorted(dirs):
        print(f"  dir  {d}")
    for f in sorted(set(files)):
        print(f"  file {f}")


if __name__ == "__main__":
    main()

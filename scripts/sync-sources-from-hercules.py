"""Download real file contents from Hercules code editor into local workspace."""
import json
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WEBSITE_ID = "01M3P54TJ2G0XSGEWEJCJ7HA9F"
SESSION = "hercules-copy"
BATCH_SIZE = 8
SKIP_DIRS = {"scripts", ".git", "node_modules"}


def project_file_paths() -> list[str]:
    paths: list[str] = []
    for path in ROOT.rglob("*"):
        if not path.is_file():
            continue
        rel = path.relative_to(ROOT)
        if any(part in SKIP_DIRS for part in rel.parts):
            continue
        if rel.name.startswith(".hercules") or rel.name.startswith(".explorer"):
            continue
        paths.append(rel.as_posix())
    return sorted(paths)


def parse_browse_result(stdout: str, stderr: str) -> str:
    combined = stdout + stderr
    start = combined.find("{")
    end = combined.rfind("}")
    if start < 0 or end <= start:
        raise RuntimeError("browse eval returned no JSON")
    wrapper = json.loads(combined[start : end + 1])
    result = wrapper.get("result")
    if result is None:
        raise RuntimeError(f"browse eval missing result: {wrapper}")
    return result


def fetch_batch(paths: list[str]) -> dict[str, str]:
    paths_json = json.dumps(paths)
    expr = (
        "(async()=>{"
        f"const paths={paths_json};"
        f"const id='{WEBSITE_ID}';"
        "const res={};"
        "for(const filePath of paths){"
        "const r=await fetch('/api/v1/website/dev/get_file',"
        "{method:'POST',headers:{'Content-Type':'application/json'},"
        "body:JSON.stringify({websiteId:id,sessionName:'main',filePath})});"
        "const d=await r.json();"
        "if(d.content===undefined)res[filePath]='';"
        "else res[filePath]=d.content;"
        "}"
        "return JSON.stringify(res);"
        "})()"
    )
    proc = subprocess.run(
        ["browse.cmd", "eval", "--session", SESSION, expr],
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        check=False,
    )
    if proc.returncode != 0:
        raise RuntimeError(proc.stderr or proc.stdout or "browse eval failed")
    raw = parse_browse_result(proc.stdout, proc.stderr)
    return json.loads(raw)


def write_file(rel_path: str, content: str) -> None:
    target = ROOT / rel_path
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content, encoding="utf-8")


def main() -> None:
    paths = project_file_paths()
    if not paths:
        print("No project files found.", file=sys.stderr)
        sys.exit(1)

    total = len(paths)
    print(f"Downloading {total} files from Hercules...")
    failed: list[str] = []

    for i in range(0, total, BATCH_SIZE):
        batch = paths[i : i + BATCH_SIZE]
        label = f"{i + 1}-{min(i + BATCH_SIZE, total)}/{total}"
        try:
            contents = fetch_batch(batch)
        except Exception as exc:
            print(f"  batch {label} ERROR: {exc}")
            failed.extend(batch)
            time.sleep(0.5)
            continue

        for rel in batch:
            if rel not in contents:
                failed.append(rel)
                continue
            write_file(rel, contents[rel])
        print(f"  batch {label} ok")
        time.sleep(0.2)

    if failed:
        print(f"Failed ({len(failed)}):", *failed[:20], sep="\n  ")
        if len(failed) > 20:
            print(f"  ... and {len(failed) - 20} more")
        sys.exit(1)
    print("Done.")


if __name__ == "__main__":
    main()

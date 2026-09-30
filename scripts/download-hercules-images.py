"""Download hercules-cdn.com assets referenced in the repo and rewrite URLs to local paths."""
import mimetypes
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PRODUCTS_TS = ROOT / "src" / "lib" / "products.ts"
OUT_DIR = ROOT / "public" / "images" / "screenshots"
CDN_PREFIX = "https://hercules-cdn.com/"

EXT_BY_TYPE = {
    "image/png": ".png",
    "image/jpeg": ".jpg",
    "image/jpg": ".jpg",
    "image/webp": ".webp",
    "image/gif": ".gif",
    "image/svg+xml": ".svg",
}


def ext_from_content_type(content_type: str | None) -> str:
    if not content_type:
        return ".bin"
    base = content_type.split(";")[0].strip().lower()
    return EXT_BY_TYPE.get(base) or mimetypes.guess_extension(base) or ".bin"


def collect_urls(text: str) -> list[str]:
    return sorted(set(re.findall(r"https://hercules-cdn\.com/file_[A-Za-z0-9]+", text)))


def download(url: str) -> tuple[Path, str]:
    file_id = url.rsplit("/", 1)[-1]
    req = urllib.request.Request(
        url,
        method="GET",
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; CodefestStudio/1.0)",
            "Accept": "image/*,*/*",
        },
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        content_type = resp.headers.get("Content-Type")
        ext = ext_from_content_type(content_type)
        data = resp.read()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    dest = OUT_DIR / f"{file_id}{ext}"
    dest.write_bytes(data)
    public_path = f"/images/screenshots/{file_id}{ext}"
    return dest, public_path


def main() -> None:
    text = PRODUCTS_TS.read_text(encoding="utf-8")
    urls = collect_urls(text)
    if not urls:
        print("No hercules-cdn URLs found.")
        return

    mapping: dict[str, str] = {}
    for url in urls:
        dest, public_path = download(url)
        mapping[url] = public_path
        print(f"  {dest.name} ({dest.stat().st_size} bytes) -> {public_path}")

    for url, public_path in mapping.items():
        text = text.replace(url, public_path)

    PRODUCTS_TS.write_text(text, encoding="utf-8")
    print(f"Updated {PRODUCTS_TS.relative_to(ROOT)} ({len(mapping)} URLs)")


if __name__ == "__main__":
    main()

# Expand all Explorer folders via ArrowRight (avoid toggling collapse on label click)
$snapPath = Join-Path $PSScriptRoot ".." ".explorer-snap.json" | Resolve-Path -ErrorAction SilentlyContinue
if (-not $snapPath) { $snapPath = "D:\CodeFest products\Website_Herculis\.explorer-snap.json" }

function Get-FolderRefs {
    param([string]$Path)
    $raw = Get-Content -LiteralPath $Path -Raw -Encoding UTF8
    $json = $raw | ConvertFrom-Json
    $refs = @()
    foreach ($line in $json.tree.Split("`n")) {
        if ($line -notmatch 'treeitem:') { continue }
        $name = ($line -split 'treeitem: ', 2)[1] -replace ' \[.*$', ''
        $name = $name.Trim()
        if ($name -match '\.(ts|tsx|js|mjs|json|css|html|yaml|d\.ts)$' -or $name -in @('.git-keep','.gitignore','.ignore','.prettierignore')) {
            continue
        }
        if ($line -match '\[([^\]]+)\]') {
            $refs += "@$($Matches[1])"
        }
    }
    return $refs | Select-Object -Unique
}

function Get-TreeitemCount {
    param([string]$Path)
    $raw = Get-Content -LiteralPath $Path -Raw -Encoding UTF8
    $json = $raw | ConvertFrom-Json
    return ([regex]::Matches($json.tree, 'treeitem:')).Count
}

$prev = 0
for ($round = 0; $round -lt 12; $round++) {
    browse snapshot --session hercules-copy 2>$null | Set-Content -LiteralPath $snapPath -Encoding utf8
    $count = Get-TreeitemCount -Path $snapPath
    Write-Host "Round $round treeitems=$count (was $prev)"
    if ($round -gt 0 -and $count -eq $prev) { break }
    $prev = $count

    $refs = Get-FolderRefs -Path $snapPath
    foreach ($ref in $refs) {
        browse click $ref --session hercules-copy 2>$null | Out-Null
        Start-Sleep -Milliseconds 120
        browse press ArrowRight --session hercules-copy 2>$null | Out-Null
        Start-Sleep -Milliseconds 80
    }
}

browse snapshot --session hercules-copy 2>$null | Set-Content -LiteralPath $snapPath -Encoding utf8
Write-Host "Final treeitems=$(Get-TreeitemCount -Path $snapPath)"

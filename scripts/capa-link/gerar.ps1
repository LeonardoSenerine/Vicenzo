# Gera assets/og.jpg (1200x630) a partir de scripts/capa-link/capa.html,
# usando o Chrome ou o Edge instalados, sem dependências extras.
$ErrorActionPreference = 'Stop'
$root = Resolve-Path "$PSScriptRoot\..\.."
$html = Join-Path $PSScriptRoot 'capa.html'
$png = Join-Path $env:TEMP 'vincenzo-capa.png'
$jpg = Join-Path $root 'assets\og.jpg'

$browser = @(
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw 'Chrome ou Edge não encontrado.' }

$url = 'file:///' + ($html -replace '\\', '/')
& $browser --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 `
  --window-size=1200,630 --virtual-time-budget=8000 "--screenshot=$png" $url | Out-Null

Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile($png)
$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$par = New-Object System.Drawing.Imaging.EncoderParameters 1
$par.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 86L
$img.Save($jpg, $enc, $par)
$img.Dispose()
Remove-Item $png
Write-Output "Capa gerada em $jpg ($([math]::Round((Get-Item $jpg).Length / 1KB)) KB)"

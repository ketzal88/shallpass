# Script para renombrar los logos en public/
# Ejecutar desde la raiz del proyecto: .\rename-logos.ps1

$publicDir = "public"

Write-Host "Renombrando logos..." -ForegroundColor Yellow

# PayPal
$paypalFile = Get-ChildItem -Path $publicDir -File | Where-Object { $_.Name -match "paypal" -and $_.Name -notlike "paypal-logo.png" }
if ($paypalFile) {
    try {
        Copy-Item -Path $paypalFile.FullName -Destination "$publicDir\paypal-logo.png" -Force
        Remove-Item -Path $paypalFile.FullName -Force -ErrorAction SilentlyContinue
        Write-Host "PayPal logo renombrado" -ForegroundColor Green
    } catch {
        Write-Host "No se pudo renombrar PayPal logo" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Logos disponibles:" -ForegroundColor Cyan
Get-ChildItem -Path $publicDir -Filter "*-logo.png" | ForEach-Object {
    Write-Host "  - $($_.Name)" -ForegroundColor White
}

Write-Host ""
Write-Host "Falta agregar: wise-logo.png" -ForegroundColor Yellow

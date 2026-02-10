$ErrorActionPreference = "Stop"

Write-Host "--- 🚀 IIS Deployment Build Started ---" -ForegroundColor Cyan

# 1. Clean dist folder
if (Test-Path "dist") {
    Write-Host "Cleaning dist folder..." -ForegroundColor Gray
    Remove-Item -Recurse -Force "dist"
}

# 2. Build User App (Port 4212)
Write-Host "Building User App..." -ForegroundColor Yellow
npx nx build user-app --configuration=production

# 3. Build Host App (Port 4210)
Write-Host "Building Host App..." -ForegroundColor Yellow
npx nx build host-app --configuration=production

Write-Host "`n--- ✅ Build Completed Successfully! ---" -ForegroundColor Green
Write-Host "You can now find your files in the 'dist' folder." -ForegroundColor Gray
Write-Host "`nIIS Configuration Summary:" -ForegroundColor Cyan
Write-Host "- HostApp (Port 4210) Path: $(Get-Location)\dist\host-app"
Write-Host "- UserApp (Port 4212) Path: $(Get-Location)\dist\user-app"

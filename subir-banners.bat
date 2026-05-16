@echo off
cd /d C:\Users\oscar\VendexChat-front
git pull origin main
xcopy /Y "C:\Users\oscar\OneDrive\Escritorio\banner\*" "public\gaucho\"
git add public\gaucho\
git commit -m "update banners"
git push origin main
echo.
echo ✓ Banners subidos correctamente.
pause

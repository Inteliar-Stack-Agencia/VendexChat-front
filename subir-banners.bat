@echo off
cd /d C:\Users\oscar\VendexChat-front
echo Actualizando repo...
git pull origin main
echo Copiando archivos...
robocopy "C:\Users\oscar\OneDrive\Escritorio\landing" "public\gaucho" /E /IS /IT /NJH /NJS /NFL /NDL
echo Subiendo a git...
git add public\gaucho\
git commit -m "update banners"
git push origin main
echo.
echo Archivos subidos correctamente.
pause

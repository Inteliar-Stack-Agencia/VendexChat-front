@echo off
cd /d C:\Users\oscar\VendexChat-front
echo Actualizando repo...
git pull origin claude/review-gaucho-pet-design-Nxi5u
echo Copiando banners...
xcopy /Y /Q "C:\Users\oscar\OneDrive\Escritorio\banner\*" "public\gaucho\"
echo Subiendo a git...
git add public\gaucho\
git commit -m "update banners"
git push origin claude/review-gaucho-pet-design-Nxi5u
echo.
echo Banners subidos correctamente.
pause

@echo off
setlocal
set /p HOST=Adresse du serveur SSH : 
set /p USER=Compte SSH : 
set /p IPMACHINE=Adresse de la machine a demarrer : 
set "PLINK=C:\Program Files\PuTTY\plink.exe"

if not exist "%PLINK%" (
  echo [ERREUR] plink.exe introuvable : %PLINK%
  exit /b 1
)

echo %IPMACHINE% | "%PLINK%" -ssh %USER%@%HOST%
echo Code retour : %errorlevel%

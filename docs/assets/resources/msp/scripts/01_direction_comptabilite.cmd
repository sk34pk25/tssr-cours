@echo off
chcp 65001 >nul
REM Exécuter dans une invite CMD lancée en administrateur.
REM Les mots de passe sont demandés de manière interactive et ne sont pas écrits dans le script.

net localgroup l_direction /add /comment:"Groupe local du service Direction"
net localgroup l_comptabilite /add /comment:"Groupe local du service Comptabilite"

net user rgrimes * /add /fullname:"Rick Grimes" /comment:"Direction" /expires:never
net localgroup l_direction rgrimes /add

net user eporter * /add /fullname:"Eugene Porter" /comment:"Comptabilite" /expires:never
net localgroup l_comptabilite eporter /add

net user cpeletier * /add /fullname:"Carol Peletier" /comment:"Comptabilite - interimaire" /expires:never
net localgroup l_comptabilite cpeletier /add
REM Sur Windows français. En cas d'erreur, vérifier la syntaxe avec: net help user
net user cpeletier /times:L-V,09:00-12:00

net user adminsecours * /add /fullname:"Administrateur de secours" /comment:"Compte local de secours" /expires:never
net localgroup Administrateurs adminsecours /add

net user
net localgroup l_direction
net localgroup l_comptabilite
pause

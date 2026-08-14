# Exécuter en administrateur avant la première connexion des utilisateurs.
$defaultDesktop = 'C:\Users\Default\Desktop\Procédures'
New-Item -ItemType Directory -Path $defaultDesktop -Force | Out-Null
@'
Règlement intérieur
- Respecter la politique de sécurité.
- Ne jamais communiquer son mot de passe.
- Stocker les documents professionnels dans les emplacements autorisés.
'@ | Set-Content -Path (Join-Path $defaultDesktop 'Règlement intérieur.txt') -Encoding UTF8

# Met aussi à jour les profils déjà créés.
Get-ChildItem 'C:\Users' -Directory | Where-Object {
    $_.Name -notin @('Default','Default User','Public','All Users')
} | ForEach-Object {
    $dest = Join-Path $_.FullName 'Desktop\Procédures'
    New-Item -ItemType Directory -Path $dest -Force | Out-Null
    Copy-Item (Join-Path $defaultDesktop 'Règlement intérieur.txt') $dest -Force
}

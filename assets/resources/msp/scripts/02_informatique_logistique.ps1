# Exécuter PowerShell en tant qu'administrateur.
# Remplacer les quatre valeurs entre chevrons avant exécution.
$VotreLogin = 'jdupont'
$VotreNomComplet = 'Jean Dupont'
$LoginBinome = 'mmartin'
$NomBinome = 'Marie Martin'

$groups = @(
    @{Name='l_informatique'; Description='Groupe local du service Informatique'},
    @{Name='l_logistique'; Description='Groupe local du service Logistique'}
)
foreach ($g in $groups) {
    if (-not (Get-LocalGroup -Name $g.Name -ErrorAction SilentlyContinue)) {
        New-LocalGroup -Name $g.Name -Description $g.Description
    }
}

$users = @(
    @{Name=$VotreLogin; FullName=$VotreNomComplet; Description='Informatique - administrateur'; Group='l_informatique'; Admin=$true},
    @{Name=$LoginBinome; FullName=$NomBinome; Description='Informatique - binome / prestataire'; Group='l_informatique'; Admin=$true},
    @{Name='respinosa'; FullName='Rosita Espinosa'; Description='Logistique'; Group='l_logistique'; Admin=$false},
    @{Name='mjones'; FullName='Morgan Jones'; Description='Logistique'; Group='l_logistique'; Admin=$false}
)

foreach ($u in $users) {
    if (-not (Get-LocalUser -Name $u.Name -ErrorAction SilentlyContinue)) {
        $pwd = Read-Host "Mot de passe temporaire pour $($u.Name)" -AsSecureString
        New-LocalUser -Name $u.Name -FullName $u.FullName -Description $u.Description -Password $pwd
    }
    Add-LocalGroupMember -Group $u.Group -Member $u.Name -ErrorAction SilentlyContinue
    if ($u.Admin) {
        Add-LocalGroupMember -Group 'Administrateurs' -Member $u.Name -ErrorAction SilentlyContinue
    }
}

# Force le binôme à changer son mot de passe à sa première ouverture de session.
cmd /c "net user $LoginBinome /logonpasswordchg:yes"

Get-LocalGroupMember l_informatique
Get-LocalGroupMember l_logistique
Get-LocalGroupMember Administrateurs

# Correction — TP7 — Certificat émanant d'une Private-KI ADCS


Certificat émanant d'une
Private-KI ADCS
TD7 Module 2

 Avant de démarrer ce TP, avoir terminé le TP6.

             Durée estimée

               3 heures

Énoncé

Objectifs:

Mise en place d’une Infrastructure à Clés Publiques (PKI) sur un serveur Windows pour
gérer les certificats numériques de manière centralisée. Cette approche facilitera le
développement sécurisé avec certificats signés par une autorité de certification
reconnue.

![TP7, correction, page 1](../../../../assets/images/reseau-et-securite/tp7/correction-p01-01.png)

![TP7, correction, page 1](../../../../assets/images/reseau-et-securite/tp7/correction-p01-02.png)


Sur SRV-CD
   •   Exécuter le script D:/InstallationPKI.ps1
   •   Faites en sorte que votre site certsrv soit fiable(le cadenas) avec son certificat.

   •
   •

![TP7, correction, page 2](../../../../assets/images/reseau-et-securite/tp7/correction-p02-04.png)

![TP7, correction, page 2](../../../../assets/images/reseau-et-securite/tp7/correction-p02-05.png)

![TP7, correction, page 3](../../../../assets/images/reseau-et-securite/tp7/correction-p03-07.png)

![TP7, correction, page 3](../../../../assets/images/reseau-et-securite/tp7/correction-p03-08.png)

•   Après avoir récupérer le certificat pour le site exécuté le script suivant:

![TP7, correction, page 4](../../../../assets/images/reseau-et-securite/tp7/correction-p04-10.png)

![TP7, correction, page 4](../../../../assets/images/reseau-et-securite/tp7/correction-p04-11.png)

![TP7, correction, page 4](../../../../assets/images/reseau-et-securite/tp7/correction-p04-12.png)

![TP7, correction, page 5](../../../../assets/images/reseau-et-securite/tp7/correction-p05-14.png)

![TP7, correction, page 5](../../../../assets/images/reseau-et-securite/tp7/correction-p05-15.png)

Sur SRV-MBR
   •   Générer votre certificat de confiance avec le CA du SRV-CD pour sécuriser votre
       URL www.votrenom.eni

![TP7, correction, page 6](../../../../assets/images/reseau-et-securite/tp7/correction-p06-17.png)

![TP7, correction, page 6](../../../../assets/images/reseau-et-securite/tp7/correction-p06-18.png)

![TP7, correction, page 7](../../../../assets/images/reseau-et-securite/tp7/correction-p07-20.png)

![TP7, correction, page 8](../../../../assets/images/reseau-et-securite/tp7/correction-p08-22.png)

![TP7, correction, page 8](../../../../assets/images/reseau-et-securite/tp7/correction-p08-23.png)

![TP7, correction, page 9](../../../../assets/images/reseau-et-securite/tp7/correction-p09-25.png)

![TP7, correction, page 10](../../../../assets/images/reseau-et-securite/tp7/correction-p10-27.png)

![TP7, correction, page 11](../../../../assets/images/reseau-et-securite/tp7/correction-p11-29.png)

![TP7, correction, page 11](../../../../assets/images/reseau-et-securite/tp7/correction-p11-30.png)

![TP7, correction, page 12](../../../../assets/images/reseau-et-securite/tp7/correction-p12-32.png)

![TP7, correction, page 12](../../../../assets/images/reseau-et-securite/tp7/correction-p12-33.png)

Sur SRV-WEB
   •   Générer votre certificat de confiance avec le CA du SRV-CD pour sécuriser votre
       URL extranet.votrenom.eni

![TP7, correction, page 13](../../../../assets/images/reseau-et-securite/tp7/correction-p13-35.png)

![TP7, correction, page 13](../../../../assets/images/reseau-et-securite/tp7/correction-p13-36.png)

![TP7, correction, page 13](../../../../assets/images/reseau-et-securite/tp7/correction-p13-37.png)

![TP7, correction, page 14](../../../../assets/images/reseau-et-securite/tp7/correction-p14-39.png)

Valeurs de la capture :

- openssl req -new -key
- Fichiers : internet.votrenom.eni.cert, internet.votrenom.eni.csr, internet.votrenom.eni.key, internet.votrenom.eni.pem

Contenu PEM masqué


![TP7, correction, page 15](../../../../assets/images/reseau-et-securite/tp7/correction-p15-41.png)

![TP7, correction, page 15](../../../../assets/images/reseau-et-securite/tp7/correction-p15-42.png)

![TP7, correction, page 15](../../../../assets/images/reseau-et-securite/tp7/correction-p15-43.png)

![TP7, correction, page 15](../../../../assets/images/reseau-et-securite/tp7/correction-p15-44.png)

Sur le routeur PFsense
   •   Générer votre certificat de confiance avec le CA du SRV-CD pour sécuriser votre
       URL routeur.votrenom.eni

![TP7, correction, page 16](../../../../assets/images/reseau-et-securite/tp7/correction-p16-46.png)

![TP7, correction, page 16](../../../../assets/images/reseau-et-securite/tp7/correction-p16-47.png)

![TP7, correction, page 16](../../../../assets/images/reseau-et-securite/tp7/correction-p16-48.png)

![TP7, correction, page 16](../../../../assets/images/reseau-et-securite/tp7/correction-p16-49.png)

![TP7, correction, page 17](../../../../assets/images/reseau-et-securite/tp7/correction-p17-51.png)

![TP7, correction, page 17](../../../../assets/images/reseau-et-securite/tp7/correction-p17-52.png)

Valeurs de la capture :

- Nom descriptif : routeur.votrenom.eni

Contenu PEM masqué


![TP7, correction, page 18](../../../../assets/images/reseau-et-securite/tp7/correction-p18-54.png)
Contenu PEM masqué


![TP7, correction, page 18](../../../../assets/images/reseau-et-securite/tp7/correction-p18-55.png)

![TP7, correction, page 18](../../../../assets/images/reseau-et-securite/tp7/correction-p18-56.png)

![TP7, correction, page 19](../../../../assets/images/reseau-et-securite/tp7/correction-p19-58.png)

![TP7, correction, page 19](../../../../assets/images/reseau-et-securite/tp7/correction-p19-59.png)

![TP7, correction, page 19](../../../../assets/images/reseau-et-securite/tp7/correction-p19-60.png)

Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté (correction reproduite ci-dessous).

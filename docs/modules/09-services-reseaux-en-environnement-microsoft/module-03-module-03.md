# Module 03 — Les stratégies de groupe

**Séquence :** Services réseaux en environnement Microsoft
**Sources originales (A) :** support, fiche de démonstration, énoncé et correction TSSR du module 03.
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Définir une stratégie de groupe (GPO).
- Situer l’usage des GPO pour les utilisateurs et les ordinateurs d’un domaine.
- Vérifier l’effet d’une stratégie dans un contexte de test.

## Rôle des GPO

Les GPO sont utilisées dans un domaine Active Directory pour paramétrer ordinateurs et utilisateurs. La source met en avant la réduction de tâches d’administration, l’automatisation et le renforcement de la sécurité, tout en rappelant que leur configuration peut être complexe et dépendre des versions système.

## Méthode de déploiement

1. Définir l’objectif et la population ciblée.
2. Créer ou modifier une GPO de laboratoire dans la console adaptée.
3. Lier la stratégie à l’emplacement prévu.
4. Forcer ou attendre l’actualisation selon le TP.
5. Vérifier le paramètre obtenu sur un poste et un utilisateur de test.

## À retenir

Une GPO est utile lorsqu’elle applique une règle cohérente à la bonne cible. Une stratégie non vérifiée peut créer une configuration inattendue à grande échelle.

## Vérification des acquis

1. Quels deux types de cibles une GPO peut-elle paramétrer ?
2. Pourquoi tester une GPO avant un déploiement large ?

??? success "Réponses"
    1. Les ordinateurs et les utilisateurs.
    2. Pour vérifier son effet et éviter une configuration inattendue.

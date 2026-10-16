# Énoncé — Les stratégies de groupe local

## Contexte

Vous configurez des stratégies locales sur le poste de laboratoire. Utilisez les comptes et les ressources fournis par le formateur. Ne créez pas de partage ni de fichier de fond d'écran qui ne ferait pas partie de votre environnement de TP.

## 1. Stratégie de mot de passe

Dans les paramètres de sécurité locaux, configurez les valeurs suivantes :

| Paramètre | Valeur demandée |
|---|---|
| Longueur minimale | 7 caractères |
| Historique | 3 mots de passe |
| Complexité | Activée |

Vérifiez ensuite le comportement avec un compte standard du scénario.

## 2. LGPO des non-administrateurs

Dans une console MMC, ouvrez l'Éditeur d'objets de stratégie de groupe pour les **non-administrateurs**. Configurez les paramètres demandés dans le scénario :

1. interdire l'accès au Panneau de configuration et aux Paramètres ;
2. verrouiller la barre des tâches ;
3. définir le fond d'écran prévu par le laboratoire.

Le fond d'écran doit pointer vers un chemin local ou partagé accessible en lecture, lorsque cette ressource est fournie dans l'environnement.

## 3. LGPO de Romain

Ajoutez l'Éditeur d'objets de stratégie de groupe pour l'utilisateur **Romain**. Configurez les paramètres demandés :

1. autoriser les paramètres du Panneau de configuration ;
2. retirer le Gestionnaire des tâches.

## 4. Vérifications

Ouvrez une session avec chaque compte concerné et notez les comportements observés. Les vérifications portent sur la politique de mot de passe, les paramètres accessibles, la barre des tâches, le fond d'écran lorsque la ressource est disponible et le Gestionnaire des tâches.

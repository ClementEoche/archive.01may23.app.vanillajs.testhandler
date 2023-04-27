# Frontend du Tableau de Messages

Ceci est l'application frontend du Tableau de Messages, une application de chat en temps réel simple qui permet aux utilisateurs de rejoindre des salons de discussion et d'échanger des messages avec d'autres utilisateurs. L'application est construite en utilisant HTML, CSS et JavaScript.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Licence](#licence)

## Fonctionnalités

- Inscription et sélection des utilisateurs
- Création et sélection des salons
- Échange de messages en temps réel entre les utilisateurs
- Stockage des sessions pour les données des utilisateurs et des salons
- Interface utilisateur moderne

## Configuration

Pour configurer l'application frontend, suivez ces étapes:

1. Clonez le dépôt sur votre machine locale :

```sh
git clone https://github.com/votre-identifiant/tableau-de-messages-frontend.git
cd tableau-de-messages-frontend
```

2. Installez `http-server` globalement à l'aide de `npm` :

```sh
npm install -g http-server
```

3. Démarrez le serveur de développement en exécutant la commande suivante à la racine du projet :

```sh
http-server
```

4. Ouvrez l'URL indiquée dans la console (généralement `http://127.0.0.1:8080`) dans votre navigateur préféré.

## Utilisation

1. Pour commencer à utiliser le Tableau de Messages, créez un nouvel utilisateur en entrant un nom d'utilisateur et en cliquant sur le bouton "Créer un utilisateur".
2. Créez un nouveau salon en entrant un nom de salon et en cliquant sur le bouton "Créer un salon".
3. Sélectionnez un salon existant dans la liste pour le rejoindre.
4. Tapez votre message dans le champ de saisie et cliquez sur le bouton "Envoyer le message" ou appuyez sur Entrée pour envoyer votre message.
5. Visualisez les messages des autres utilisateurs en temps réel.
6. Cliquez sur le bouton "Déconnexion" pour effacer toutes les données de session et revenir à l'écran de création d'utilisateur.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.
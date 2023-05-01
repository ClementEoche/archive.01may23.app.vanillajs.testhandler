# Message Board App

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
git clone https://github.com/ceocheschool/tested-vanilla-js-app
cd tested-vanilla-js-app
```

2. Installez les dépendances du projet pour les tests à l'aide de `npm` :

```sh
npm i
```

3. Installez `http-server` globalement à l'aide de `npm` :

```sh
npm install -g http-server
```

4. Démarrez le serveur de développement en exécutant la commande suivante à la racine du projet :

```sh
http-server
```

5. Ouvrez l'URL indiquée dans la console (`http://localhost:8080`) dans votre navigateur préféré.

## Tests

Pour exécuter les tests, suivez ces étapes :

1. Decommentez l'import axios dans le fichier `src/api/index.js` :

```js
// import axios from 'axios';
```

2. Exécutez la commande suivante à la racine du projet :

```sh
npm test
```

Assurez-vous que le serveur de développement est en cours d'exécution avant d'exécuter les tests.

## Utilisation

1. Pour commencer à utiliser Message Board renseignez votre nom d'utilisateur dans le champ de saisie et le nom du salon.
2. Tapez votre message dans le champ de saisie et cliquez sur le bouton "Envoyer le message" ou appuyez sur Entrée pour envoyer votre message.
3. Visualisez les messages des autres utilisateurs en temps réel.
4. Cliquez sur le bouton "Snap Fingers like Thanos" pour effacer toutes les données de session et revenir à l'écran de création d'utilisateur.
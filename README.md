# Projet Logiciel

Ce projet est un mono-repo contenant les éléments suivants :

- Une application web en React
- Une API en NestJS
- Une base de données MongoDB, conteneurisée
- Un dossier partagé contenant des utilitaires et des types partagés entre les éléments du projet

## Installation du projet

### Prérequis

- Node.js
- Docker
- Docker-compose

### Installation

1. Cloner le projet
2. Installer les dépendances de l'API et de l'application web
3. Lancer les conteneurs Docker

```bash
git clone
cd projet-logiciel
npm install
```

## Utilisation

### Lancer l'application en mode développement

Cette commande va lancer l'application web et l'API en parallèle.

```bash
npm run dev
```

### Lancer la base de données

Cette commande va lancer la base de données MongoDB dans un conteneur Docker.
Attention, la base de données doit être lancée avant de lancer l'API.
Cette commande redémarre la base de données, effectuant une réinitialisation des données (prisma push, generate, seed)

```bash
npm run database
```

### Lancer un build de production

Cette commande va construire l'application web et l'API pour la production.

```bash
npm run build
```

### Lancer l'application en mode production

Cette commande va lancer l'application web et l'API en mode production.

```bash
npm run start
```

## Développement

### API

L'API est développée en TypeScript avec NestJS. Elle utilise une base de données MongoDB.

### Application web

L'application web est développée en TypeScript avec React. Elle utilise l'API pour récupérer les données.

## Contributeurs

- [Aubertin Swen](https://github.com/SwenA)
- [Harnist Guillaume](https://github.com/Lekitre)
- [Isselin Lucas](https://github.com/Artros68)
- [Walter Loïc](https://github.com/LoicWalter)
- [Zittel Laureline](https://github.com/Llianae)

## License

Ce projet est sous licence MIT.

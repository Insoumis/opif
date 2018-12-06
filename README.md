## Installation et premier lancement

pré-requis : nodejs v8 (non compatible node v10+)

```
git clone https://github.com/Insoumis/opif.git
npm install
npm start
```
Ouvrir votre navigateur à l'adresse `http://localhost:8000/`

## Autres commandes
```js
// Lancer le serveur
npm start
// Build le site
npm run build
// Tester le build sur un serveur local
npm run build:serve
// Build et déployer le site en "production"
npm run deploy
```

## Aujouter du contenu
Pour ajouter du contenu il faut ajouter vos fichiers dans `pages`. Pour l'instant seul le format `Markdown` est pris en compte mais n'hésitez pas à demander si vous avez besoin d'autre chose !

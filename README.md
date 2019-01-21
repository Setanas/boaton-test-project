# Boaton 

## Projet

Le but est de réaliser une API RESTFUL en 1 semaine en `NodeJS`.

Une base donnée est dèjà fourni dans le dossier sql.

Avant de démarrer il suffit de fork le projet .

Pour le rendu il suffit de faire un pull request.

Un minimum de gestion d'erreur, un code clair et commenté est demandé.
L'Utilisation des callbacks est fortement recommendé.

si il y a besoin de plus d'information, ne pas hésiter à me contacter

### Premier Endpoint

Créer une requete de connection en `POST`qui prend en body un login et un mot de passe, qui renvera un token qui sera utilisé pour chaque requete. Le token doit etre unique généré aléatoirement (il n'y pas besoin de le rendre temporaire)

### Deuxieme Enpoint

Créer un requete avec la methode `PUT` qui prend en header le token et en body : 
  - nom
  - prenom
  - email
  - birthdate
  - immatriculation
  - maker
  - model
  - total 
  
Elle doit renvoyer le total rentré dans la base de donnée


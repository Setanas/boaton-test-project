# Projet Boaton 

Voici la réalisation a faire pour le projet Boaton 

## Projet

Le but est de réalisé une API RESTFUL en deux semaines à réaliser en `NodeJS`.
La connection à la base est dèjà donnée

Avant de démarrer il faut  fork le projet .

Pour le rendu il suffit de faire un pull request.

### Premier Endpoint

Créer une requete de connection en `POST`qui prend en body un login et un mot de passe et qui renvoie un token qui sera renvoyé pour chaque requete. Le token doit etre unique générer aléatoirement (il n'y pas besoin de le rendre temporaire)

### Deuxieme Enpoint

Créer un requete  qui recoie et créer une nouvelle ligne dans la base avec la methode `PUT` qui prend en header le token générer precedemment et en body : 
  - nom
  - prenom
  - email
  - birthdate
  - immatriculation
  - maker
  - model
  - total 
  
Elle doit renvoyer le total rentrer dans la base de donnée

Instrucciones para correr la app
--------

Levantar el server (http://localhost:8080)  y el cliente web (http://localhost:3000) en modo desarrollo:

`docker-compose up -d`

Hacer el build del cliente web y levantar el server en modo production (http://localhost:80):

`docker-compose -f docker-compose.prod.yml up -d`

Instrucciones para correr los test
----------

Server:

`docker-compose run server npm test`

Web:

`docker-compose run client npm test`

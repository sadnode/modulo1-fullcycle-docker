FROM node:latest

RUN apt-get update
RUN apt-get install vim -y

RUN npm --version
RUN node --version

VOLUME /home/igor/Documentos/fullcycle/docker2/nginx/node/api/:/app

EXPOSE 3000

# RUN node index.js
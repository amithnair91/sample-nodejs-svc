FROM node:12.1.0-alpine

WORKDIR /app

COPY index.js /app/index.js
COPY package.json /app/package.js

RUN npm install

ENV PORT=8000

CMD npm run start

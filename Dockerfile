FROM node:latest

EXPOSE 3000

COPY src/pages /app/pages
COPY src/lib /app/scripts
COPY public /app/public
COPY package.json /app/package.json
COPY next.config.mjs /app/next.config.mjs
COPY src/middleware.js /app/middleware.js

WORKDIR /app

RUN npm install
RUN npm run build

CMD ["npm", "start"]

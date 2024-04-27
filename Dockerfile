FROM node:latest

EXPOSE 3000

COPY pages /app/pages
COPY scripts /app/scripts
COPY public /app/public
COPY package.json /app/package.json
COPY next.config.js /app/next.config.js
COPY middleware.js /app/middleware.js

WORKDIR /app

RUN npm install
RUN npm run build

CMD ["npm", "start"]

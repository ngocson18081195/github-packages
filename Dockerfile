FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY dist/index.js
CMD [ "node", "dist/index.js" ]

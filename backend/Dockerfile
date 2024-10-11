# backend/Dockerfile
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm i --save-dev nodemon

COPY . .

EXPOSE 5000

CMD ["npm", "run dev"]
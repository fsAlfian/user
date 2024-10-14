# backend/Dockerfile
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Copy the wait-for-it script
COPY ./scripts/wait-for-it.sh ./scripts/wait-for-it.sh

COPY . .

# Ensure the wait-for-it script is executable
RUN chmod +x ./scripts/wait-for-it.sh

CMD ["./scripts/wait-for-it.sh", "db:3307", "--", "npm", "run", "dev"]
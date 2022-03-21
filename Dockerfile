FROM node:16.14.2 AS base
WORKDIR /app

FROM base AS node_modules
COPY package-lock.json package.json ./
RUN npm install
COPY . .

FROM node_modules AS dev
EXPOSE 3000
CMD npm run start

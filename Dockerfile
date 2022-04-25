FROM node:18.0.0 AS base
WORKDIR /app

FROM base AS node_modules
COPY package-lock.json package.json ./
RUN npm install
COPY . .

FROM node_modules AS dev
EXPOSE 3000
CMD npm run start

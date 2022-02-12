FROM node:16.14.0 AS node_modules
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install
COPY . .

FROM node_modules AS prod_builder
RUN npm run build

FROM nginx:1.21.6 AS prod
COPY --from=prod_builder /app/build /usr/share/nginx/html

FROM node_modules AS dev
EXPOSE 3000
CMD npm run start

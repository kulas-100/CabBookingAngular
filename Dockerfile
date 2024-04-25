# Stage 1: Build the Angular application
FROM node:20 as build-step

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Stage 2: Serve the application from Nginx
FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/my-app /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
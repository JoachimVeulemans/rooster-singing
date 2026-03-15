# 1 - Define base image & tag it as build-stage
FROM node:24.14.0 AS build-stage

# 2 - Change working directory
WORKDIR /app

# 3 - Copy package.json and package-lock.json to install dependencies
COPY package*.json /app/

# 4 - Install dependencies
RUN npm install

# 5 - Copy project to /app directory
COPY ./ /app/

# 6 - Define the configuration of the build
ARG configuration=rooster-singing

# 7 - Build the Angular project
RUN npm run build -- --configuration ${configuration} --output-path=./dist/out

# 8 - Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.29.6

# 9 - Copy the build output to the nginx-container
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

# 10 - Copy the default.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# 11 - Copy the nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

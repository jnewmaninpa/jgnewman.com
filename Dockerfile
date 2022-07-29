FROM node:16-alpine as build
WORKDIR /usr/local/app
COPY . ./
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /usr/local/app/dist/jgnewman.com /usr/share/nginx/html
EXPOSE 80

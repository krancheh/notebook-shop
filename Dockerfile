FROM node:latest AS build
WORKDIR /
COPY package.json .
RUN npm install
COPY . .
RUN npm run build:prod

FROM nginx:latest
COPY --from=build /dist /usr/share/nginx/html
COPY --from=build /nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENV PORT=80
EXPOSE ${PORT}
CMD [ "nginx", "-g", "daemon off;" ]
FROM node:12.4.0-alpine as build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . ./

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}

RUN npm run build

## stage 2
FROM nginx:1.17.0-alpine

COPY --from=build /app/build /var/www

COPY nginx.conf /etc/nginx/nginx.conf

RUN ln -sf /dev/stdout /var/log/nginx/access.log 
RUN ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]

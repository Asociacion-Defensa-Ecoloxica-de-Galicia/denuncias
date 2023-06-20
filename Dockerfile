FROM alpine:latest
RUN apk update \
    && apk add lighttpd \
    && rm -rf /var/cache/apk

WORKDIR /usr/src/app/
COPY . .

WORKDIR /usr/src/app/frontend
RUN npm install
RUN npm run build
COPY /usr/src/app/frontend/dist/* /var/www/localhost/htdocs
WORKDIR /usr/src/app/
RUN rm /usr/src/app/* -rf


CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]
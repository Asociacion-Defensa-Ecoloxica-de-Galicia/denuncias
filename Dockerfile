FROM alpine:latest
RUN apk update
RUN apk add lighttpd npm

WORKDIR /usr/src/app/
COPY . .

WORKDIR /usr/src/app/frontend
RUN npm install
RUN npm run build
RUN cp -a /usr/src/app/frontend/dist/* /var/www/localhost/htdocs

WORKDIR /usr/src/app/
RUN rm /usr/src/app/* -rf
RUN apk del npm
RUN rm -rf /var/cache/apk

EXPOSE ${PORT}
RUN echo "server.port = env.PORT" >> /etc/lighttpd/lighttpd.conf

CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]

FROM node:14
WORKDIR /app
RUN npm install -g json-server
COPY . .
EXPOSE 3040
CMD ["json-server","-p","3040","-w","mock-server/db.json","--host","0.0.0.0"]


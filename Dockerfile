FROM node:20

COPY package.json /app/
COPY package-lock.json /app/

WORKDIR /app
COPY . /app/

CMD [ "sh", "-c", "npm install && npm start" ]
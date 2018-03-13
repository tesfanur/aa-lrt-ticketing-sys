FROM: node:8.9.4
WORKDIR /app
COPY package.json /app
RUN npm isntall
COPY . /app
CMD npm start
EXPOSE 5000

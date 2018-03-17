FROM: node:8.9.4
WORKDIR /app
COPY package.json /app/package.json
#install app dependencies
#RUN cd/app; npm install
RUN npm install
#bundle app source
COPY . /app
CMD npm start
EXPOSE 8000

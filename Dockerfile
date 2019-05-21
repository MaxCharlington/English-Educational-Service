FROM node:9-slim
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install --only=prod
#COPY . /usr/src/app
EXPOSE 3000
CMD ["npm", "start"]
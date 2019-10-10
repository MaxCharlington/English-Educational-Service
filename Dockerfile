FROM node:9-slim
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --only=prod
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]
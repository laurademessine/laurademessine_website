FROM node:12
WORKDIR /usr/src/app
COPY . .
RUN yarn install

ENV NODE_ENV=production

EXPOSE 80
CMD [ "node", "server.js"]

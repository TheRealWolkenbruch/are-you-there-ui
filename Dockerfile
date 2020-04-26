FROM node:14.0-stretch
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN yarn install

COPY . ./

# start app
EXPOSE 3000
CMD ["yarn", "start"]

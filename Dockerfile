FROM node:14.0-stretch
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN yarn install

COPY . ./
RUN yarn build

EXPOSE 3000
CMD ["http-server", "./build", "-a", "0.0.0.0", "-p", "3000", "--no-dotfiles"]

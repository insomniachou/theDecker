FROM node:12-alpine AS app-base
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD npm start

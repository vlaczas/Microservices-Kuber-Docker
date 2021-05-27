FROM node:lts-alpine3.13

WORKDIR /app
COPY package.json ./
RUN npm install

COPY . ./
EXPOSE 8000

ENV HOST=0.0.0.0
ENV PORT=8000

RUN npm run build

CMD [ "npm", "run", "start" ]
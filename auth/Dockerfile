FROM node:alpine3.13
ENV NODE_ENV=production
WORKDIR /app
COPY package.json .
RUN npm install
COPY dist .

CMD ["npm", "start"]
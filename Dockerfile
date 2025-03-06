FROM node:20.18.2-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY dist/ ./src
COPY prisma/ ./prisma
COPY src/apiDocs/ ./src/apiDocs

RUN apk add --no-cache openssl libssl3 

RUN mkdir media
RUN mkdir media/output

RUN npm install --only=production
RUN npm install -g prisma
RUN prisma generate

EXPOSE 8000 8001

CMD ["node", "src/Index.js"]
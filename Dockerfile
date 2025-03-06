FROM node:20.18.2-alpine

WORKDIR /app

COPY package.json ./
COPY prisma/ ./prisma

RUN apk add --no-cache openssl libssl3 

RUN npm install
RUN npm install -g prisma
RUN prisma generate

COPY . .

RUN npm run build --verbose

EXPOSE 8000

CMD ["node", "dist/Index.js"]
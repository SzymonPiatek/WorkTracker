FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install prisma --save-dev

RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "run", "dev"]

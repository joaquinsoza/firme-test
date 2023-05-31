FROM node:lts

RUN apt -y update

WORKDIR /
RUN mkdir /workspace
WORKDIR /workspace

COPY . .

ENV NODE_ENV=production

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
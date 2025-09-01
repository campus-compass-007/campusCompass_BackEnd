FROM node:lts-alpine
WORKDIR /backend
COPY . . 
RUN npm install
CMD ["npm", "run", "dev"]
EXPOSE 5000

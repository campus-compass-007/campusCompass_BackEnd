# campusCompass_BackEnd
Repo responsible for all the background operations

The below code, lines 6-31 belong in the overarching docker-compose.yml file. MONGO_URI, SESSION_SECRET, SECRET, VITE_MAPBOX_TOKEN fields will need to be updated with the relevant information, before the docker image can be created successfully. 

services:
  mongo:
    image: mongo
    restart: always
    ports:
      - "27016:27017"
    volumes:
      - mongo-data:/data/db
  backend:
    build: ./campusCompass_BackEnd
    depends_on:
      - mongo
    environment:
      - MONGO_URI=
      - SESSION_SECRET=
      - SECRET=
      
    ports:
      - "5000:5000"
  frontend:
    environment:
      - VITE_MAPBOX_TOKEN=
    build: ./campusCompass_FrontEnd
    ports:
      - "3000:3000"
volumes:
  mongo-data:

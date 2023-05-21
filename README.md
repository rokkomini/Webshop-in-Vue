# Webshop

This is a webshop created with Vue3 and Vite, Node and Express with the databse set in MongoDB.

## Run project with docker

1. Clone the repository:

```bash
git clone https://github.com/rokkomini/Webshop-in-Vue.git
```

2. Use command:

```bash
docker compose up --build
```

----
## To run manually

1. Clone the repository:

```bash
git clone https://github.com/rokkomini/Webshop-in-Vue.git"
```
2. Install dependencies
```bash
npm install
```
3. Create .env file in server

```bash
PORT = your chosen port
MONGODB_URL = path to Mongodb
```

4. Create .env file in client

```bash
VITE_API_KEY = path to server
```

5. Docker
- Create a catalogue on your harddrive to enable Mongo to store its data
- Create and start a MongoDB-container
```bash
docker run --name mongodb-tutorial -v <your-data-catalogue>:/data/db  -p 27017:27017 -d mongo 
  ```
- Check to see if docker container is started
 ```bash
  docker ps
  ```
  
6. Start server 
  ```bash
  npm run server
  ```
7. Start client
  ```bash
  npm run client
  ```




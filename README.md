# Firme Test

This project is a full-stack application consisting of a backend (NestJS), a frontend (NextJS App - create t3 app), and a database (MongoDB).

![exampleGif](./gif/example.gif)

## Prerequisites

- Docker v20.10.0 or later (I'm using 20.10.23)

## How to run

First, build the docker images by running:

```bash
bash buildDockerImages.sh
```

After the images are ready, run:

```bash
docker-compose up
```

front url http://localhost:4000

as easy as it gets

## Backend Endpoints

There are 3 endpoints:

- **Is service active?**  
  GET `http://localhost:3000`
- **Update the data**  
  POST `http://localhost:3000/update_data`
- **Fetch data**  
  GET `http://localhost:3000/fetch`

The cron job runs every hour, at the start of the 10th minute.

## Scripts

**check_docker_logs.sh**
This must be used with a flag "-b" for backend and "-f" for frontend, it shows you the logs of the docker container

**connect_to_docker.sh**
This connects you to the container so you can run things inside of it, it also uses flags

## Comments

- The first time running the app you should post to the update endpoint or wait for the cron to run
- Many potential improvements are annotated with "TO-DO:" in the code (mostly types).
- A Multi-Saged Dockerfile was not used.
- Another TO-DO would be to add a deletion feature. One approach could be to add an 'enabled' column to the 'hits' table. When the 'delete' button is pressed, this could change to 'false', and the find query should not get the data when it's not enabled. This also prevents the data to be inserted into the db again.
- The .env files are not included in the .gitignore as they do not contain any sensitive data.

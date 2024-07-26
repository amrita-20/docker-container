# docker-container
A comprehensive collection of Docker projects and resources. Includes sample Dockerfiles, materials,  projects  and Docker workflows.

## What is Docker
    Its a platform that enables the development, packaging and execution of an application in an unified environment. Docker generates a self contained box that contains its own OS and all the components for running an application. 

### multiple container can be initiated using a single image

docker client - CLI, Docker Desktop

docker host - docker deamon

docker hub

### Build image and run the docker container

docker build -t dockername .

docker run dockername

docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules dockername

### How to publish docker image

docker tag dockername username/dockername

docker push username/dockername

### Automatic build and generation of dockerfiles

docker init

sudo docker compose up


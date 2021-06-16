- build and run an image as a container
- share images using docker hub
- deploy docker applications using multiple containers with a database
- running applications using docker compose

node js


create a simple nodejs application 
create a new dockerfile which contains instructions required to build a node.js image

run the newly built image as a container
set up a local development environment to connect a database to the container
use docker compose to run the node.js application
configure a ci/cd pipeline for your application using github actions.

build node image

an image includes everything you need to run an application -the code or binary, runtime ,dependencies, and any other file system objects required.

the mocking server is called ronin.js and will listen on port 8000 by default.
you can make post requests to the root / endpoint and any json structrue you send to the server will be saved in memory.
you can also send same requrest and get the array of json objects that you have previously posted.

`node server.js`


A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. when we tell docker to build our image by executing the docker build command, docker reads these instructions and executes them one by one and creates a Docker image as a result.


Lets walk through the process of creating a Dockerfile for out application in the root of your working directory file named Dockerfile and oopen this file in your text editor.




# [Docker and Kubernetes](https://www.youtube.com/watch?v=Wf2eSG3owoA&t=53s)

What is a Docker ?
Docker is a tool for running applications in an isolated environment
similar to virtual machine
app run in same environment
just works
standard for software deployment

## container vs VM

containers are an abstraction at the app layer that packages code and dependencies together. multiple containers can run on the same machine and share the OS kernel with other containers each running as isolated processes in user space.
VMs are an abstraction of physical hardware turning one server into many servers. The hypervisor allows multiple VMs to run on a single machine. Each VM includes a full copy of an operating system, the application, necessary binaries and libraries -taking up tens of GBs. VMs can also be slow to boot.

## docker's benefits

- run container in seconds instead of minutes
- Less resources results less disk space
- uses less memory
- does not need full os
- deployment
- testing

docker run nginx:latest
docker run -d nginx:latest
docker runt -d -p 8080:80 nginx:latest
docker ps
docker stop (container id or name) -> stop the container
docker start (container id or name) -> start the container
docker ps -a (all containers includes stopped container)
docker rm (id or name)
docker ps -aq (-q means quiet give me only numeric id)
docker rm $(docker ps -aq) remove all container
docker run --name website -d -p 3000:80 -p 8080:80 nginx:latest

# Core3VueJS
VueJS Template Sample running under .NET Core 3 Preview 8 via VSCode Remote containers

# Requirements

Docker Desktop Windows 10(Pro) /MacOS  https://www.docker.com/products/docker-desktop

Visual Studio Code https://code.visualstudio.com/

VSCode Plugins

https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome

# Docker container and image refresh

run:

```
docker ps
```

locate the container with image that starts with: vsc-clonedfoldername-guid and note the container id and image name

run:

```
docker stop [container id]

docker rm [container id]

docker rmi [image name]
```

This stops the container if it is running, removes the container, then removes the image. Next time you open the folder with VSCode and the remote container,
it will build the image again from scratch and pick up any updates.

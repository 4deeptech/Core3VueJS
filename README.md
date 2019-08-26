# Core3VueJS
VueJS Template Sample running under .NET Core 3 Preview 8 via VSCode Remote containers

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

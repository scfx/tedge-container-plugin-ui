# Cumulocity thin-edge.io container plugin UI.

UI for the tedge-container-plugin ([Link](https://github.com/thin-edge/tedge-container-plugin)) to monitor installed containers and container groups.

## Plugin summary
-----
The plug-in containers 3 tabs that can be added to the devicemanagemet application.

| Plug-In  | Function |
|----------|----------|
|Container Info Tab|Adds a tab to a container service to display all relevant container informations.|
|Container Management Tab|Adds a tab to the device to monitor containers. The tab can include/exclude the containers hosted within container groups.|
|Container Group Management Tab| Adds a tab to the device to monitor container groups (aka. docker compose).|

### Container Info Tab
The tab will be enabled for all services of type container. Displays the container properties that are stored in the managed Obect.
![Conatiner Info Screenshot](./doc/container-info.png)

### Container Management Tab
The tab will be enabled for all devicese with a childAddtion with serviceType=container. Lists all containers in a grid or list.The search can be used for the image name and the project id. The list can include/exclude the containers that are part of a container group.
![Conatiner Container Management Screensho](./doc/container-management.png)

### Container Group Management Tab
The tab will be enabled for all devicese with a childAddtion with serviceType=container. Lists all containers that are part of a procet. The filter/search can be used to search for project names or container images.
![Conatiner Container Management Screensho](./doc/container-group-management.png.png)
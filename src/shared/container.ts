export interface Container {
    containerId: string,
    ports: string,
    command: string
    networks: string,
    filesystem: string,
    image: string,
    runningFor: string,
    state: string,
    status: string,
    project?: string
}

export interface ContainerGroup {
    project: string
    containers: Container[]
}
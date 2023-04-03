import { Injectable } from '@angular/core';
import { ContainerGroup, Container } from './container';

@Injectable({
    providedIn: 'root'
})
export class ContainerService {
    getContainers(): Container[] {
        return this.containers;
    }
    getContainerGroups(): ContainerGroup[] {
        let containers: Container[] = this.containers;
        let projects: string[] = containers.map(c => c.project).filter((value, index, array) => array.indexOf(value) === index);
        return projects.map(p => { return { project: p, containers: containers.filter(c => c.project == p) } })
    }

    stop(container: Container) {
        console.log("Stopping Container" + container.containerId + ", unfortnunatley it is not implementet yet")
    }



    containers: Container[] =
        [
            {
                "containerId": "f4b16f06f0a4",
                "ports": "8000",
                "command": " / bin / sh - c 'python manage.py runserver 0.0.0.0:$PORT'",
                "networks": "webapp_network",
                "filesystem": "1.2GB (virtual 2.66GB)",
                "image": "webapp_image",
                "runningFor": "1 day ago",
                "state": "running",
                "status": "Up 8 hours",
                "project": "Django Web App"
            },

            {
                "containerId": "7d1f65a2a7b9",
                "ports": "5432",
                "command": " / docker - entrypoint.sh postgres",
                "networks": "database_network",
                "filesystem": "2.7GB (virtual 3.44GB)",
                "image": "postgres:latest",
                "runningFor": "2 weeks ago",
                "state": "running",
                "status": "Up 12 days",
                "project": "PostgreSQL Database"
            },

            {
                "containerId": "d87ef3a3d3e5",
                "ports": "3000",
                "command": " / bin / sh - c 'npm start'",
                "networks": "frontend_network",
                "filesystem": "1.4GB (virtual 2.79GB)",
                "image": "frontend_image",
                "runningFor": "4 hours ago",
                "state": "running",
                "status": "Up 4 hours",
                "project": "React Frontend"
            },

            {
                "containerId": "5a3b5b2c2121",
                "ports": "8080",
                "command": " / bin / sh - c 'java -jar /app.jar'",
                "networks": "backend_network",
                "filesystem": "1.8GB (virtual 3.12GB)",
                "image": "backend_image",
                "runningFor": "2 days ago",
                "state": "running",
                "status": "Up 18 hours",
                "project": "Spring Boot Backend"
            },
            {
                "containerId": "5a3b5b2c2121",
                "ports": "8080",
                "command": " / bin / sh - c 'java -jar /app.jar'",
                "networks": "backend_network",
                "filesystem": "1.8GB (virtual 3.12GB)",
                "image": "backend_image2",
                "runningFor": "2 days ago",
                "state": "running",
                "status": "Up 18 hours",
                "project": "Spring Boot Backend"
            },

            {
                "containerId": "c8f2230c0e54",
                "ports": "27017",
                "command": " / usr / bin / mongod--config / etc / mongodb.conf",
                "networks": "database_network",
                "filesystem": "2.5GB (virtual 3.15GB)",
                "image": "mongo:latest",
                "runningFor": "3 weeks ago",
                "state": "running",
                "status": "Up 14 days",
                "project": "MongoDB Database"
            },
            {
                "containerId": "c8f2230c0e54",
                "ports": "27017",
                "command": " / usr / bin / mongod--config / etc / mongodb.conf",
                "networks": "database_network",
                "filesystem": "2.5GB (virtual 3.15GB)",
                "image": "mongo:latest2",
                "runningFor": "3 weeks ago",
                "state": "running",
                "status": "Up 14 days",
                "project": "MongoDB Database"
            }
        ]

}

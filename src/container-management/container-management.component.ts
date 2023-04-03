import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContainerService } from '../shared/container-service';
import { Container } from '../shared/container';


@Component({
    selector: 'container-management-tab',
    templateUrl: './container-management.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ContainerManagementComponent implements OnInit {
    containers: Container[]
    deviceId: string;
    gridOrList: 'interact-list' | 'interact-grid' = 'interact-grid';
    constructor(private route: ActivatedRoute, private containerservice: ContainerService) { }

    ngOnInit(): void {
        this.deviceId = this.route.snapshot.parent.data.contextData["id"];
        this.loadData()
    }

    displayMode(listClass: 'interact-list' | 'interact-grid') {
        this.gridOrList = listClass;
    }

    async loadData() {
        this.containers = this.containerservice.getContainers()
    }
}
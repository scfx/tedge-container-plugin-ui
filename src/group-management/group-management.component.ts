import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContainerService } from '../shared/container-service';
import { ContainerGroup } from '../shared/container';


@Component({
    selector: 'group-management-tab',
    templateUrl: './group-management.component.html',
    encapsulation: ViewEncapsulation.None
})

export class GroupManagementComponent implements OnInit {
    groups: ContainerGroup[]
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
        this.groups = this.containerservice.getContainerGroups();
    }

}
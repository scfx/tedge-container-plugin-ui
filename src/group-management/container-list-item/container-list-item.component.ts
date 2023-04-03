import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Container } from '../../shared/container';
import { ContainerService } from '../../shared/container-service';
@Component({
    selector: 'container-list-item',
    templateUrl: './container-list-item.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ContainerListItemComponent {
    constructor(private containerservice: ContainerService) { }
    @Input() container: Container;
    isCollapsed: boolean
    collapse() {
        this.isCollapsed = !this.isCollapsed;
    }

    stop() {
        console.log("not implemented")
    }
}
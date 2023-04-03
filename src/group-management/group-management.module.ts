import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule, HOOK_TABS, ViewContext, FormsModule, TabsModule, HOOK_ROUTE, Route } from '@c8y/ngx-components';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { GroupManagementComponent } from './group-management.component';
import { ContainerListItemComponent } from './container-list-item/container-list-item.component';

const tabHook =
{
    provide: HOOK_ROUTE,
    useValue: [
        {
            path: 'Groups',
            context: ViewContext.Device,
            component: GroupManagementComponent,
            label: 'Groups',
            priority: 1000,
            icon: 'packages',
            //canActivate: [GroupManagementGuard]
        }
    ],
    multi: true
}


@NgModule({
    declarations: [GroupManagementComponent, ContainerListItemComponent],
    imports: [
        CoreModule, FormsModule, BsDropdownModule,
    ],
    entryComponents: [GroupManagementComponent],
    providers: [tabHook]

})
export class GroupManagementModule { }
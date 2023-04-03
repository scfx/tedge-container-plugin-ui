import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule, HOOK_TABS, ViewContext, FormsModule, TabsModule, HOOK_ROUTE, Route } from '@c8y/ngx-components';
import { ContainerManagementComponent } from './container-management.component';
import { ContainerManagementGuard } from './container-management.guard';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


const tabHook =
{
    provide: HOOK_ROUTE,
    useValue: [
        {
            path: 'containers',
            context: ViewContext.Device,
            component: ContainerManagementComponent,
            label: 'Containers',
            priority: 2000,
            icon: 'package',
            //canActivate: [ContainerManagementGuard]
        }
    ],
    multi: true
}


@NgModule({
    declarations: [ContainerManagementComponent],
    imports: [
        CoreModule, FormsModule, BsDropdownModule,
    ],
    entryComponents: [ContainerManagementComponent],
    providers: [tabHook]

})
export class ContainerManagementModule { }
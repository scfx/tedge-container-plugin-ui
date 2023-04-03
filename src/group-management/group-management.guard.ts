import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GroupManagementGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const contextData = route.data.contextData || route.parent.data.contextData;

        if (contextData["c8y_SupportedOperations"]) {

            if (contextData["c8y_SupportedOperations"].includes('c8y_ContainerGroup')) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
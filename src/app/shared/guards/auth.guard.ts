import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const url = route.data.url;

        if(!this.authService.isLoggedIn) {
            if(url == 'login' || url == 'register') {
                return true;
            }
            this.router.navigate(['login']);
            return false;
        }
        else {
            if(url == 'login' || url == 'register') {
                this.router.navigate(['theses-list']);
                return false;
            }
            else {
                if(this.authService.userRole == 'supervisor') {
                    return true;
                }
                else {
                    if(url == 'thesis-add') {
                        this.router.navigate(['theses-list']);
                        return false;
                    }
                    return true;
                }
            }
        }
    }
}

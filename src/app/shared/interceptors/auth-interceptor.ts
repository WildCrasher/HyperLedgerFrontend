import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem("auth_key");
        let cloned;

        if(token) {
            cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + token)
            });
        }
        else {
            cloned = req;
        }

        return next.handle(cloned).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error && error.status === 401) {
                    console.log('Authentication failure');
                    this.router.navigate(['login']);
                } else if (error.status === 403) {
                    console.log('Forbidden');
                    this.router.navigate(['login']);
                } else {
                    return throwError(error);
                }
            })
        );
    }
}

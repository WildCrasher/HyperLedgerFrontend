import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
    ) { }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem("auth_key");
        if (token) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + token)
            });

            return next.handle(cloned).pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error && error.status === 401) {
                        console.log('Authentication failure');
                        this.authService.logout();
                    } else if (error.status === 403) {
                        console.log('Forbidden');
                        this.authService.logout();
                    } else {
                        return throwError(error);
                    }
                })
            );
        }
        else {
            return next.handle(req);
        }
    }
}

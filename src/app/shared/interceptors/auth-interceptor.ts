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
                    this.router.navigate(['login']);
                    return throwError('authError');
                } else if (error.status === 403) {
                    this.router.navigate(['login']);
                    return throwError('authError');
                } else {
                    return throwError(error);
                }
            })
        );
    }
}

import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDtoImpl } from '../dtos/login.dto';
import { RegisterDtoImpl } from './../../register/register.dto';
import { environment } from './../../../environments/environment';
import * as jwt_decode from 'jwt-decode';

export interface IDecodedUser {
    email: string;
    sub: number;
    roles: any;
    iat: number;
    expr: number;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private url;

    loginUrl = '/login';
    registerUrl = '/register';
    logoutUrl = '/logout';

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.url = environment.backendUrl;
    }

    login(loginDtoImpl: LoginDtoImpl): Observable<any> {
        return this.http.post(this.url + this.loginUrl, loginDtoImpl);
    }

    register(registerDtoImpl: RegisterDtoImpl): Observable<any> {
        return this.http.post(this.url + this.registerUrl, registerDtoImpl);
    }

    logout(navigationExtras: NavigationExtras = {}): boolean {
        this.http.post(this.url + this.logoutUrl, { token: localStorage.getItem('auth_key') }).subscribe((res) => {
            localStorage.removeItem('auth_key');
            this.router.navigate(['login']);
            return true;
        });
        return false;
    }

    get decodedAccessToken(): IDecodedUser {
        const token = localStorage.getItem('auth_key');
        try {
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    }

    get userEmail() {
        const tokenInfo = this.decodedAccessToken;
        if(tokenInfo) {
            return tokenInfo.email;
        }
        return null;
    }
}

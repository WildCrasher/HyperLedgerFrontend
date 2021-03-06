import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDtoImpl } from '../dtos/login.dto';
import { RegisterDtoImpl } from '../dtos/register.dto';
import { environment } from './../../../environments/environment';
 // @ts-ignore  
import jwt_decode from 'jwt-decode';

export interface IDecodedUser {
    username: string;
    role: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private url;

    loginUrl = 'login';
    registerUrl = 'auth/register';

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

    logout(navigationExtras: NavigationExtras = {}) {
        localStorage.removeItem('auth_key');
        this.router.navigate(['login']);
    }

    get isLoggedIn() {
        return this.username ? true : false;
    }

    get decodedAccessToken(): IDecodedUser {
        const token = localStorage.getItem('auth_key');
        try {
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    }

    get username(): string {
        const tokenInfo = this.decodedAccessToken;
        if(tokenInfo) {
            return tokenInfo.username;
        }
        return null;
    }

    get userRole(): string {
        const tokenInfo = this.decodedAccessToken;
        if(tokenInfo) {
            return tokenInfo.role;
        }
        return null;
    }
}

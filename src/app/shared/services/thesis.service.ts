import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { ThesisDto } from './../dtos/thesis.dto';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class ThesisService {

    private url;

    private addThesisUrl = 'api/thesis';
    private getThesesUrl = 'api/thesis';
    private getThesisUrl = 'api/thesis/';
    private assignThesisUrl = 'api/thesis/assign';
    private approveThesisUrl = 'api/thesis/approve';

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {
        this.url = environment.backendUrl;
    }

    // createAuthorizationHeader(headers: HttpHeaders) {
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Access-Control-Allow-Origin', 'true')
    // }

    addThesis(thesisData: any) {
        return this.http.post<string>(this.url + this.addThesisUrl, thesisData);
    }

    getTheses() {
        // let headers = new HttpHeaders();
        // this.createAuthorizationHeader(headers);
        return this.http.get<any>(this.url + this.getThesesUrl/*, {headers: headers}*/);
    }

    getThesis(id: string) {
        return this.http.get<any>(this.url + this.getThesisUrl + id);
    }

    assignStudent(thesisNumber: string): Observable<any> {
        return this.http.post(this.url + this.assignThesisUrl, {
            student: this.authService.username,
            thesisNumber: thesisNumber
        });
    }

    approveThesis(thesisNumber: string): Observable<any> {
        return this.http.post(this.url + this.approveThesisUrl, {
            thesisNumber: thesisNumber
        });
    }
}

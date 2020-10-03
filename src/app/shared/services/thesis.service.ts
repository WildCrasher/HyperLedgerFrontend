import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { ThesisDto } from './../dtos/thesis.dto';

@Injectable({
    providedIn: 'root'
})
export class ThesisService {

    private url;

    addThesisUrl = 'api/thesis';
    getThesesUrl = 'api/thesis';
    getThesisUrl = 'api/thesis/';

    constructor(private http: HttpClient) {
        this.url = environment.backendUrl;
    }

    // createAuthorizationHeader(headers: HttpHeaders) {
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Access-Control-Allow-Origin', 'true')
    // }

    addThesis(thesisData: any) {
        return this.http.post<ThesisDto>(this.url + this.addThesisUrl, thesisData);
    }

    getTheses() {
        // let headers = new HttpHeaders();
        // this.createAuthorizationHeader(headers);
        return this.http.get<ThesisDto[]>(this.url + this.getThesesUrl/*, {headers: headers}*/);
    }

    getThesis(id: string) {
        return this.http.get<ThesisDto>(this.url + this.getThesisUrl + id);
    }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { ThesisDto } from './../dtos/thesis.dto';

@Injectable({
    providedIn: 'root'
})
export class ThesisService {

    private url;

    constructor(private http: HttpClient) {
        this.url = environment.backendUrl;
    }

    // createAuthorizationHeader(headers: HttpHeaders) {
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Access-Control-Allow-Origin', 'true')
    // }

    addThesis(thesisData: any) {
        return this.http.post<ThesisDto>(this.url + 'thesis', thesisData);
    }

    getTheses() {
        // let headers = new HttpHeaders();
        // this.createAuthorizationHeader(headers);
        return this.http.get<ThesisDto[]>(this.url + 'thesis'/*, {headers: headers}*/);
    }

    getThesis(id: string) {
        return this.http.get<ThesisDto>(this.url + 'thesis/' + id);
    }
}

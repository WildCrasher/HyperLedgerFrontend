import { HttpClient } from '@angular/common/http';
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

    addThesis(thesisData: any) {
        return this.http.post<ThesisDto>(this.url + 'thesis', thesisData);
    }

    getTheses() {
        return this.http.get<ThesisDto[]>(this.url + 'thesis');
    }

    getThesis(id: string) {
        return this.http.get<ThesisDto>(this.url + 'thesis/' + id);
    }
}

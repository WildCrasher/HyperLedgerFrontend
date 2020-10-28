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
    private getThesisAssignmentsUrl = 'api/thesis/thesis-assignments';
    private assignThesisUrl = 'api/thesis/assign';
    private chooseStudentUrl = 'api/thesis/choose-student';
    private revokeThesisUrl = 'api/thesis/revoke';

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {
        this.url = environment.backendUrl;
    }

    addThesis(thesisData: any) {
        return this.http.post<string>(this.url + this.addThesisUrl, thesisData);
    }

    getTheses() {
        return this.http.get<any>(this.url + this.getThesesUrl);
    }

    getThesisAssignments() {
        return this.http.get<any>(this.url + this.getThesisAssignmentsUrl);
    }

    getThesis(id: string) {
        return this.http.get<any>(this.url + this.getThesisUrl + id);
    }

    assignStudent(thesisNumber: string, priority: string): Observable<any> {
        return this.http.post(this.url + this.assignThesisUrl, {
            student: this.authService.username,
            thesisNumber: thesisNumber,
            priority: priority,
        });
    }

    chooseThesis(thesisNumber: string): Observable<any> {
        return this.http.post(this.url + this.chooseStudentUrl, {
            thesisNumber: thesisNumber
        });
    }

    revokeThesis(thesisNumber: string): Observable<any> {
        return this.http.post(this.url + this.revokeThesisUrl, {
            thesisNumber: thesisNumber
        });
    }
}

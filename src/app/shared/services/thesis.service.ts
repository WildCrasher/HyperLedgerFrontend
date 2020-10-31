import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
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
    private removeThesisUrl = 'api/thesis/delete';
    private assignThesisUrl = 'api/thesis/assign';
    private chooseStudentUrl = 'api/thesis/choose-student';
    private revokeThesisUrl = 'api/thesis/revoke';
    private acceptAssignmentUrl = 'api/thesis/accept';
    private declineAssignmentUrl = 'api/thesis/decline';

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

    removeThesis(id: string) {
        // let headers = new HttpHeaders();
        // headers.set('Access-Control-Allow-Origin', '*');
        // headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
        return this.http.get<any>(this.url + this.removeThesisUrl + id/*, {headers: headers}*/);
    }

    assignStudent(thesisNumber: string, priority: string): Observable<any> {
        return this.http.post(this.url + this.assignThesisUrl, {
            student: this.authService.username,
            thesisNumber: thesisNumber,
            priority: priority,
        });
    }

    chooseThesis(thesisNumber: string, username: string): Observable<any> {
        return this.http.post(this.url + this.chooseStudentUrl, {
            thesisNumber: thesisNumber,
            student: username
        });
    }

    revokeThesis(thesisNumber: string): Observable<any> {
        return this.http.post(this.url + this.revokeThesisUrl, {
            thesisNumber: thesisNumber
        });
    }

    acceptAssignment(thesisNumber: string): Observable<any> {
        return this.http.post(this.url + this.acceptAssignmentUrl, {
            thesisNumber: thesisNumber
        });
    }

    declineAssignment(thesisNumber: string): Observable<any> {
        return this.http.post(this.url + this.declineAssignmentUrl, {
            thesisNumber: thesisNumber
        });
    }
}

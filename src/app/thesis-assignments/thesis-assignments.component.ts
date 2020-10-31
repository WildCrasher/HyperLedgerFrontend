import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThesisDto } from '../shared/dtos/thesis.dto';
import { AuthService } from '../shared/services/auth.service';
import { ThesisService } from '../shared/services/thesis.service';

@Component({
    selector: 'app-thesis-assignments',
    templateUrl: './thesis-assignments.component.html',
    styleUrls: ['./thesis-assignments.component.scss']
})
export class ThesisAssignmentsComponent implements OnInit {

    theses: ThesisDto[] = [];
    loading = false;

    constructor(
        private thesisService: ThesisService,
        private router: Router,
        private authService: AuthService,
    ) { }

    get isThisStudentChosenThesis(): boolean {
        return this.loading == false
            && this.theses.length == 1
            && this.theses[0].student == this.authService.username
            && this.theses[0].state == 'OWNED';
    }

    getStatus(thesis: ThesisDto): string {
        if(thesis.student == ' ') {
            return 'Oczekiwanie na propozycję promotora'
        }
        else {
            if(this.isSupervisorProposedThesisToThisStudent(thesis) && !this.isThisStudentChosenThesis) {
                return 'Oczekiwanie na Twoją decyzję';
            }
            else if(!this.isSupervisorProposedThesisToThisStudent(thesis) && thesis.state != 'OWNED') {
                return 'Oczekiwanie na decyzję ' + thesis.student;
            }
            else {
                return 'Wybrałeś tę pracę dyplomową';
            }
        }
    }

    isSupervisorProposedThesisToThisStudent(thesis): boolean {
        return this.loading == false
            && thesis.student == this.authService.username;
    }

    ngOnInit(): void {
        this.loading = true;
        this.thesisService.getThesisAssignments().subscribe(
            res => {
                console.log(JSON.parse(res));
                this.theses = JSON.parse(res);
                this.loading = false;
            },
            error => {
                this.loading = false;
                console.log(error);
            }
        );
    }

    onThesisDetails(thesisNumber: string) {
        this.router.navigate([`/thesis-details/${thesisNumber}`]);
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThesisDto } from '../shared/dtos/thesis.dto';
import { AuthService } from '../shared/services/auth.service';
import { ThesisService } from '../shared/services/thesis.service';

@Component({
    selector: 'app-theses-supervisor',
    templateUrl: './theses-supervisor.component.html',
    styleUrls: ['./theses-supervisor.component.scss']
})
export class ThesesSupervisorComponent implements OnInit {

    theses: ThesisDto[] = [];
    loading = false;

    constructor(
        private thesisService: ThesisService,
        private authService: AuthService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.loading = true;
        this.thesisService.getTheses().subscribe(
            res => {
                console.log(JSON.parse(res));
                this.theses = JSON.parse(res).filter(thesis => thesis.supervisor == this.authService.username);
                this.loading = false;
            },
            error => {
                this.loading = false;
                console.log(error);
            }
        );
    }

    isThesisBelongsToSupervisor(thesis: ThesisDto): boolean {
        return this.loading == false && this.authService.username == thesis.supervisor;
    }

    isSomeoneAssignOrChosenThesis(thesis: ThesisDto): boolean {
        return this.loading == false
            && ((thesis.studentsAssigned.length >= 1 && thesis.state == 'FREE') || thesis.state == 'OWNED');
    }

    getState(thesis: ThesisDto): string {
        if(thesis.state == 'FREE') {
            return 'Wolna';
        }
        else {
            return 'Zajęta';
        }
    }

    onThesisDetails(thesisNumber: string) {
        this.router.navigate([`/thesis-details/${thesisNumber}`]);
    }

    onThesisRemove(thesisNumber: string) {
        this.loading = true;
        this.thesisService.removeThesis(thesisNumber).subscribe(
            res => {
                this.ngOnInit();
            },
            error => {
                this.loading = false;
                console.log(error);
            }
        );
    }
}

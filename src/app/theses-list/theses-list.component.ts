import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThesisDto } from '../shared/dtos/thesis.dto';
import { AuthService } from '../shared/services/auth.service';
import { ThesisService } from '../shared/services/thesis.service';

@Component({
    selector: 'app-theses-list',
    templateUrl: './theses-list.component.html',
    styleUrls: ['./theses-list.component.scss']
})
export class ThesesListComponent implements OnInit {

    theses: ThesisDto[] = [];
    loading = false;

    constructor(
        private thesisService: ThesisService,
        private router: Router,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
        this.loading = true;
        this.thesisService.getTheses().subscribe(
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

    getState(thesis: ThesisDto): string {
        if(thesis.state == 'FREE') {
            return 'Wolna';
        }
        else {
            return 'Zajęta';
        }
    }

    isThesisBelongsToSupervisor(thesis: ThesisDto): boolean {
        return this.loading == false && this.authService.username == thesis.supervisor;
    }

    isSomeoneAssignOrChosenThesis(thesis: ThesisDto): boolean {
        return this.loading == false
            && ((thesis.studentsAssigned.length >= 1 && thesis.state == 'FREE') || thesis.state == 'OWNED');
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

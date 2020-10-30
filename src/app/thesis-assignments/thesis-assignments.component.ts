import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThesisDto } from '../shared/dtos/thesis.dto';
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
    ) { }

    getStatus(thesis: ThesisDto): string {
        if(thesis.student == '') {
            return 'Oczekiwanie na propozycję promotora'
        }
        else {
            return 'Oczekiwanie na Twoją decyzję';
        }
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

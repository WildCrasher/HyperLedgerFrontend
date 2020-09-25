import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThesisService } from '../shared/services/thesis.service';

@Component({
    selector: 'app-theses-list',
    templateUrl: './theses-list.component.html',
    styleUrls: ['./theses-list.component.scss']
})
export class ThesesListComponent implements OnInit {

    theses = [];

    constructor(
        private thesisService: ThesisService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.thesisService.getTheses().subscribe((res) => {
            this.theses = res;
        });
    }

    onThesisDetails(thesisNumber: string) {
        this.router.navigate([`/thesis-details/${thesisNumber}`]);
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThesisDto } from '../shared/dtos/thesis.dto';
import { ThesisService } from '../shared/services/thesis.service';

@Component({
    selector: 'app-theses-list',
    templateUrl: './theses-list.component.html',
    styleUrls: ['./theses-list.component.scss']
})
export class ThesesListComponent implements OnInit {

    theses: ThesisDto[] = null;

    constructor(
        private thesisService: ThesisService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.thesisService.getTheses().subscribe((res) => {
            console.log(JSON.parse(res));
            this.theses = JSON.parse(res);
        });
    }

    onThesisDetails(thesisNumber: string) {
        this.router.navigate([`/thesis-details/${thesisNumber}`]);
    }
}

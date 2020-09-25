import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThesisService } from '../shared/services/thesis.service';

@Component({
    selector: 'app-thesis-details',
    templateUrl: './thesis-details.component.html',
    styleUrls: ['./thesis-details.component.scss']
})
export class ThesisDetailsComponent implements OnInit {

    thesis = null;

    constructor(
        private route: ActivatedRoute,
        private thesisService: ThesisService,
    ) {
        this.route.queryParams.subscribe((params) => {
            if(params.id) {
                this.thesisService.getThesis(params.id).subscribe((res) => {
                    this.thesis = res;
                });
            }
            else {
                console.log('ERROR');
            }
        });
    }

    ngOnInit(): void {
    }

}

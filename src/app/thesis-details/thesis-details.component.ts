import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThesisDto } from '../shared/dtos/thesis.dto';
import { ThesisService } from '../shared/services/thesis.service';

@Component({
    selector: 'app-thesis-details',
    templateUrl: './thesis-details.component.html',
    styleUrls: ['./thesis-details.component.scss']
})
export class ThesisDetailsComponent implements OnInit {

    thesis: ThesisDto;

    constructor(
        private route: ActivatedRoute,
        private thesisService: ThesisService,
    ) {
        this.route.paramMap.subscribe((params) => {
            console.log(params);
            if(params.get('id')) {
                this.thesisService.getThesis(params.get('id')).subscribe((res) => {
                    console.log(res);
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

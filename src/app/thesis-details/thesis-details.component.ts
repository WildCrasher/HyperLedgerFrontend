import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThesisDto } from '../shared/dtos/thesis.dto';
import { AuthService } from '../shared/services/auth.service';
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
        private authService: AuthService
    ) {
        this.route.paramMap.subscribe((params) => {
            if(params.get('id')) {
                this.thesisService.getThesis(params.get('id')).subscribe((res) => {
                    this.thesis = JSON.parse(res);
                });
            }
            else {
                console.log('ERROR');
            }
        });
    }

    ngOnInit(): void {
    }

    get isStudent(): boolean {
        return this.authService.userRole == "student";
    }

    get isSupervisor(): boolean {
        return this.authService.userRole == "supervisor";
    }

    assign() {
        this.thesisService.assignStudent(this.thesis.thesisNumber).subscribe(res => {
            console.log(res);
        });
    }

    approve() {
        this.thesisService.approveThesis(this.thesis.thesisNumber).subscribe(res => {
            console.log(res);
        })
    }

}

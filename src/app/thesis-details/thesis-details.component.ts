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
    loading = false;

    constructor(
        private route: ActivatedRoute,
        private thesisService: ThesisService,
        private authService: AuthService,
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            if(params.get('id')) {
                this.thesisService.getThesis(params.get('id')).subscribe((res) => {
                    this.thesis = JSON.parse(res);
                    this.loading = false;
                });
            }
            else {
                console.log('ERROR');
                this.loading = false;
            }
        });
    }

    get isStudent(): boolean {
        return this.authService.userRole == "student";
    }

    get isSupervisor(): boolean {
        return this.authService.userRole == "supervisor";
    }

    assign() {
        this.loading = true;
        this.thesisService.assignStudent(this.thesis.thesisNumber).subscribe(res => {
            console.log(res);
            this.ngOnInit();
        });
    }

    approve() {
        this.loading = true;
        this.thesisService.approveThesis(this.thesis.thesisNumber).subscribe(res => {
            console.log(res);
            this.ngOnInit();
        })
    }

    revoke() {
        this.loading = true;
        this.thesisService.revokeThesis(this.thesis.thesisNumber).subscribe(res => {
            console.log(res);
            this.ngOnInit();
        })
    }
}

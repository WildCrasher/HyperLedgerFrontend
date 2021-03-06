import { OptionIsNotDefinedException } from '@angular-devkit/schematics';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    assignForm: FormGroup;
    isStudentChosenAnyThesis = false;

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private thesisService: ThesisService,
        public authService: AuthService,
    ) {
        this.assignForm = this.formBuilder.group({
            priority: ['2', Validators.required],
        });
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            if(params.get('id')) {
                this.loading = true;
                this.thesisService.getThesis(params.get('id')).subscribe((res) => {
                    this.thesis = JSON.parse(res);
                    this.resolveIfStudentChosenAnyThesis();
                    this.loading = false;
                    console.log(this.thesis);
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

    get isStudentAssigned(): boolean {
        return this.loading == false
            && this.thesis.studentsAssigned.find(student => student.studentName == this.authService.username) != undefined;
    }

    get isStudentAskedBySupervisor(): boolean {
        return this.loading == false
            && this.thesis.student == this.authService.username
            && this.thesis.state == "FREE";
    }

    get isThesisBelongsToSupervisor(): boolean {
        return this.authService.username == this.thesis.supervisor;
    }

    get isStudentAcceptedThisThesis(): boolean {
        return this.loading == false
            && this.thesis.student == this.authService.username
            && this.thesis.state == 'OWNED';
    }

    get isThesisOwned(): boolean {
        return this.loading == false
            && this.thesis.state == 'OWNED';
    }

    getState(): string {
        if(this.thesis.state == 'FREE') {
            return 'Wolna';
        }
        else {
            return 'Zajęta';
        }
    }

    resolveIfStudentChosenAnyThesis() {
        this.thesisService.getThesisAssignments().subscribe(
            res => {
                console.log(JSON.parse(res));
                const theses = JSON.parse(res);
                if(theses.length == 1
                    && theses[0].student == this.authService.username
                    && theses[0].state == 'OWNED'
                ) {
                    this.isStudentChosenAnyThesis = true;
                }
            },
            error => {
                this.loading = false;
                console.log(error);
            }
        );
    }

    onAssign() {
        if(this.assignForm.valid) {
            this.loading = true;
            this.thesisService.assignStudent(this.thesis.thesisNumber, this.assignForm.value.priority).subscribe(
                res => {
                    console.log(res);
                    this.ngOnInit();
                },
                error => {
                    this.loading = false;
                    console.log(error);
                }
            );
        }
    }

    onChooseStudent(studentName: string) {
        this.loading = true;
        this.thesisService.chooseThesis(this.thesis.thesisNumber, studentName).subscribe(
            res => {
                console.log(res);
                this.ngOnInit();
            },
            error => {
                this.loading = false;
                console.log(error);
            }
        );
    }

    onRevoke() {
        this.loading = true;
        this.thesisService.revokeThesis(this.thesis.thesisNumber).subscribe(
            res => {
                console.log(res);
                this.ngOnInit();
            },
            error => {
                this.loading = false;
                console.log(error);
            }
        )
    }

    onAccept() {
        this.loading = true;
        this.thesisService.acceptAssignment(this.thesis.thesisNumber).subscribe(
            res => {
                console.log(res);
                this.ngOnInit();
            },
            error => {
                this.loading = false;
                console.log(error);
            }
        )
    }

    onDecline() {
        this.loading = true;
        this.thesisService.declineAssignment(this.thesis.thesisNumber).subscribe(
            res => {
                console.log(res);
                this.ngOnInit();
            },
            error => {
                this.loading = false;
                console.log(error);
            }
        )
    }
}

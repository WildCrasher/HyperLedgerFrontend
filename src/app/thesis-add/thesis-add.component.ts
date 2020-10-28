import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThesisService } from './../shared/services/thesis.service';

@Component({
    selector: 'app-thesis-add',
    templateUrl: './thesis-add.component.html',
    styleUrls: ['./thesis-add.component.scss']
})
export class ThesisAddComponent implements OnInit {

    addThesisForm: FormGroup;
    loading = false;

    constructor(
        private fb: FormBuilder,
        private thesisService: ThesisService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.addThesisForm = this.fb.group({
            topic: ['', [Validators.required]],
            thesisNumber: ['', Validators.required]
        });
    }

    onAddThesis() {
        if(this.addThesisForm.valid) {
            this.loading = true;
            this.thesisService.addThesis(this.addThesisForm.value).subscribe((res) => {
                this.router.navigate(['theses-list']);
                if(res == 'success') {
                    this.loading = false;
                    this.router.navigate(['theses-list']);
                }
                else {
                    this.loading = false;
                    console.log('ERROR', res);
                }
            });
        }
    }
}

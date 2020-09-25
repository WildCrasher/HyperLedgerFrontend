import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThesisService } from './../shared/services/thesis.service';

@Component({
    selector: 'app-thesis-add',
    templateUrl: './thesis-add.component.html',
    styleUrls: ['./thesis-add.component.scss']
})
export class ThesisAddComponent implements OnInit {

    addThesisForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private thesisService: ThesisService,
    ) { }

    ngOnInit(): void {
        this.addThesisForm = this.fb.group({
            topic: ['', [Validators.required, Validators.minLength(10)]],
        });
    }

    onAddThesis() {
        if(this.addThesisForm.valid) {
            this.thesisService.addThesis(this.addThesisForm.value).subscribe((res) => {
                console.log(res);
            });
        }
    }
}

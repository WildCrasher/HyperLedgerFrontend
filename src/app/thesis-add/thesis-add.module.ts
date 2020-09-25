import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThesisAddComponent } from './thesis-add.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ThesisAddComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ThesisAddComponent,
            }
        ]),
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class ThesisAddModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ThesisDetailsComponent } from './thesis-details.component';


@NgModule({
    declarations: [ThesisDetailsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ThesisDetailsComponent,
            }
        ]),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class ThesisDetailsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThesisAddComponent } from './thesis-add.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ThesisAddComponent],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ThesisAddComponent,
            }
        ]),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class ThesisAddModule { }

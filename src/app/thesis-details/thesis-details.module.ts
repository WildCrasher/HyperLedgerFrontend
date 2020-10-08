import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    ]
})
export class ThesisDetailsModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    declarations: [NotFoundComponent],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: NotFoundComponent,
            }
        ]),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class NotFoundModule { }

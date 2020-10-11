import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [RegisterComponent],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: RegisterComponent,
            }
        ]),
        SharedModule,
    ]
})
export class RegisterModule { }

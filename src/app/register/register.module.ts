import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: RegisterComponent,
            }
        ]),
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class RegisterModule { }

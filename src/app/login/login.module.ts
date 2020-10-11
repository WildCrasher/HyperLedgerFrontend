import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent,
            }
        ]),
        SharedModule,
    ]
})
export class LoginModule { }

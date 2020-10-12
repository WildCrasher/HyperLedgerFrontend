import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMessageComponent } from '../shared/components/input-message/input-message.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent,
            }
        ]),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMessageComponent } from './components/input-message/input-message.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        InputMessageComponent,
        NavbarComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        InputMessageComponent,
        NavbarComponent,
        FooterComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule { }

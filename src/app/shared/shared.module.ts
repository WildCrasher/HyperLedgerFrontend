import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMessageComponent } from './components/input-message/input-message.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        InputMessageComponent,
        NavbarComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        InputMessageComponent,
        NavbarComponent,
        FooterComponent,
    ]
})
export class SharedModule { }

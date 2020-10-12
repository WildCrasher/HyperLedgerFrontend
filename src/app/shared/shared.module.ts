import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMessageComponent } from './components/input-message/input-message.component';

@NgModule({
    declarations: [
        InputMessageComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        InputMessageComponent,
    ]
})
export class SharedModule { }

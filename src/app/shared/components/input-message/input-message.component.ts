import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.scss']
})
export class InputMessageComponent implements OnInit {
    @Input() input: FormControl;
    @Input() controlName = '';

    constructor() { }

    ngOnInit() {
    }


    getControlName(c: FormControl): string | null {
        if (c.parent) {
            const formGroup = c.parent.controls;
            return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
        } else {
            return this.controlName;
        }
    }

}

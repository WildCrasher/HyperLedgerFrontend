import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThesisDetailsComponent } from './thesis-details.component';


@NgModule({
  declarations: [],
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThesisAssignmentsComponent } from './thesis-assignments.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ThesisAssignmentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThesisAssignmentsComponent,
      }
    ]),
  ]
})
export class ThesisAssignmentsModule { }

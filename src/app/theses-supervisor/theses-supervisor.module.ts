import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThesesSupervisorComponent } from './theses-supervisor.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ThesesSupervisorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThesesSupervisorComponent,
      }
    ]),
  ]
})
export class ThesesSupervisorModule { }

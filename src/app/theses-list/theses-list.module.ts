import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThesesListComponent } from './theses-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ThesesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThesesListComponent,
      }
    ]),
  ]
})
export class ThesesListModule { }

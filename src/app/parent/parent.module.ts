import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }

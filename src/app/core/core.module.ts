import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SchoolCardComponent } from './school-card/school-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SchoolCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SchoolCardComponent
  ]
})
export class CoreModule { }

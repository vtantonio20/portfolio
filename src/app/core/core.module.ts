import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SchoolCardComponent } from './school-card/school-card.component';
import { SkillCardComponent } from './skill-card/skill-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SchoolCardComponent,
    SkillCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SchoolCardComponent,
    SkillCardComponent
  ]
})
export class CoreModule { }

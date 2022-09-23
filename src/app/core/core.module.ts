import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SchoolCardComponent } from './school-card/school-card.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SchoolCardComponent,
    SkillCardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SchoolCardComponent,
    SkillCardComponent,
    FooterComponent
  ]
})
export class CoreModule { }

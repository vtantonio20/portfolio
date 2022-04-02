import { Skill } from './../../core/models/skill';
import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { School } from 'src/app/core/models/school';
import { Observable } from 'rxjs/internal/Observable';
import schools from 'src/assets/static/schools.json';
import skillsList from 'src/assets/static/skills.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @ViewChild('about') public about : ElementRef | undefined;
  @ViewChild('education') public education : ElementRef | undefined;
  @ViewChild('skills') public skills : ElementRef | undefined;
  @ViewChild('projects') public projects : ElementRef | undefined;
  @ViewChild('contact') public contact : ElementRef | undefined;

  constructor() {  }


  uf:School|undefined;
  gcsc:School|undefined;

  skillsArray: Skill[]|undefined;

  ngOnInit(): void {
    this.gcsc=schools.gcsc;
    this.uf=schools.uf;
    this.skillsArray= skillsList.skills;
  }

  navigation(linkTo:string){
    if(linkTo.toLowerCase() === 'about') return this.about?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start', overflow: 'hidden' });
    if(linkTo.toLowerCase() === 'education') return this.education?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start', overflow: 'hidden' });
    if(linkTo.toLowerCase() === 'skills') return this.skills?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start', overflow: 'hidden' });
    if(linkTo.toLowerCase() === 'projects') this.projects?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start', overflow: 'hidden' });
    if(linkTo.toLowerCase() === 'contact') this.contact?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start', overflow: 'hidden' });
    return;
  }

  log(s:any){
    console.log(s)
  }
}

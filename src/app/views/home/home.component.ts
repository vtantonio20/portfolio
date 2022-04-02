import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { School } from 'src/app/core/models/school';

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

  constructor(private router:Router, private viewportScroller:ViewportScroller) {  }

  uf:School|undefined;
  gcsc:School|undefined;

  ngOnInit(): void {
    let gcsc: School = {
      name: 'Gulf Coast State College',  
      location: 'Panama City, FL',
      gpa:'3.7',
      degree:'Associate of Arts',
      major: 'Liberal Arts',
      startDate:'08/2019',
      graduationDate:'12/2020',
      img:'assets/gcsc.png',
      link:'https://www.gulfcoast.edu/'

    }
    let uf: School = {
      name: 'University of Florida',  
      location: 'Gainesville, FL',
      gpa:'3.6',
      degree:'Bachelor of Science',
      major: 'Computer Science',
      startDate:'01/2021',
      graduationDate:'05/2023',
      img:'assets/uf.png',
      link:'https://www.ufl.edu/'

    }
    this.gcsc=gcsc;
    this.uf=uf;
  }

  navigation(linkTo:string){
    if(linkTo.toLowerCase() === 'about') return this.about?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start', overflow: 'hidden' });
    if(linkTo.toLowerCase() === 'education') return this.education?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start', overflow: 'hidden' });
    if(linkTo.toLowerCase() === 'skills') return this.skills?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start', overflow: 'hidden' });
    if(linkTo.toLowerCase() === 'projects') this.projects?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start', overflow: 'hidden' });
    if(linkTo.toLowerCase() === 'contact') this.contact?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start', overflow: 'hidden' });
    return;
  }
}

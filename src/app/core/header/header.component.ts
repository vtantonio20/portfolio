import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  sideBar:boolean =  false;
  navigation:string[] = ['About', 'Education', 'Skills','Projects', 'Contact', 'Resume'];

  @Output() clickEvent = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
  }

  toggleSideBar(){
    this.sideBar= !this.sideBar;
  }

  clickedNav(value:string){
    if(value === 'Resume') return window.open('assets/resume.pdf', "_blanks");
    return this.clickEvent.emit(value);
  }
}

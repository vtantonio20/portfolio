import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  sideBar:boolean =  false;
  navigation:string[] = ['About', 'Education', 'Projects', 'Contact', 'Resume'];

  @Output() clickEvent = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
  }

  toggleSideBar(){
    this.sideBar= !this.sideBar;
  }

  clickedNav(value:string){
    this.clickEvent.emit(value);

  }

  

}

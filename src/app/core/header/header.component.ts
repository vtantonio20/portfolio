import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sideBar:boolean =  false;

  constructor() { }
  ngOnInit(): void {
  }

  toggleSideBar(){
    this.sideBar= !this.sideBar;
  }

  

}

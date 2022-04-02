import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('about') public about : ElementRef | undefined;
  @ViewChild('skills') public skills : ElementRef | undefined;

  inCard:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleInCard(){
    this.inCard=!this.inCard;
  }

  public moveToAbout():void {
    this.about?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start', overflow: 'hidden' });
  }
  public moveToSkills():void {
    this.skills?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start', overflow: 'hidden' });
  }
  
}

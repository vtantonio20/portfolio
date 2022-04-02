import { School } from './../models/school';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-card',
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.css']
})
export class SchoolCardComponent implements OnInit {

  @Input()school:School | undefined;
  @Input()graduated:Boolean| undefined;
  constructor() { }
  ngOnInit(): void { }

}

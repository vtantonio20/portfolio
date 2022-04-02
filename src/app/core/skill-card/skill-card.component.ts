import { Skill } from './../models/skill';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

  constructor() { }


  @Input()  skill:Skill | undefined;
  ngOnInit(): void {
  }

}
/*
typescript
https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg

javascript
https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg

java
'assets/skills/java.svg'

c++
https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg

python
https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg

html
https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg

css
https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg

angular 
https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg

tailwind 
https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg

figma
https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg

git
https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg

*/
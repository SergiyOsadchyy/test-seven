import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  public demoPerson:
    { avatar: {src: string, alt: string },
      name: string,
      description: string,
      city: string,
      numberOfFullStars: number,
      hasHalfStar: boolean,
      numberOfReviews: number
    };

  public demoLanguages: Array<{src: string, name: string}>;

  constructor() { }

  ngOnInit(): void {
  this.demoPerson = {
      avatar: {src: 'assets/images/shared/controls/left-card/avatar.svg', alt: 'avatar'},
      name: 'Cristofer Carder Junior',
      description: 'UI\\UX Designer, Web Designer,\nMobile App Designer, UI\\UX Designer,\n Web Designer,Mobile App Designer',
      city: 'Lviv, Ukraine',
      numberOfFullStars: 4,
      hasHalfStar: true,
      numberOfReviews: 234
    };

  this.demoLanguages = [
      {src: 'assets/images/shared/controls/left-card/ukraine.svg', name: 'ukrainian'},
      {src: 'assets/images/shared/controls/left-card/britain.svg', name: 'english'},
      {src: 'assets/images/shared/controls/left-card/russia.svg', name: 'russian'},
      {src: 'assets/images/shared/controls/left-card/france.svg', name: 'french'},
      {src: 'assets/images/shared/controls/left-card/germany.svg', name: 'german'},
      {src: 'assets/images/shared/controls/left-card/turkey.svg', name: 'turkish'},
      {src: 'assets/images/shared/controls/left-card/china.svg', name: 'chinese'},
      {src: 'assets/images/shared/controls/left-card/spain.svg', name: 'spanish'},
      {src: 'assets/images/shared/controls/left-card/portugal.svg', name: 'portuguese'}
    ];
  }

  onAvatarEdit(): void {
    // TODO: develop AvatarEdit feature
  }

  onDataEdit(): void {
    // TODO: develop DataEdit feature
  }

  onLanguageSelect(name: string): void {
    // TODO: develop LanguageSelect feature
  }
}

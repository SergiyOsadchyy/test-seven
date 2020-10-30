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

  public demoLanguages: Array<any>;

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
      {src: 'assets/images/shared/controls/left-card/ukraine.svg', alt: 'ukrainian'},
      {src: 'assets/images/shared/controls/left-card/britain.svg', alt: 'english'},
      {src: 'assets/images/shared/controls/left-card/russia.svg', alt: 'russian'},
      {src: 'assets/images/shared/controls/left-card/france.svg', alt: 'french'},
      {src: 'assets/images/shared/controls/left-card/germany.svg', alt: 'german'},
      {src: 'assets/images/shared/controls/left-card/turkey.svg', alt: 'turkish'},
      {src: 'assets/images/shared/controls/left-card/china.svg', alt: 'chinese'},
      {src: 'assets/images/shared/controls/left-card/spain.svg', alt: 'spanish'},
      {src: 'assets/images/shared/controls/left-card/portugal.svg', alt: 'portuguese'}
    ];
  }
}

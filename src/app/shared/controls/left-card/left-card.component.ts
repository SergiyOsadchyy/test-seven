import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.scss']
})
export class LeftCardComponent {
  @Input() public languages: Array<any> = [
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

  @Input() public person: any = {
    avatar: {src: 'assets/images/shared/controls/left-card/avatar.svg', alt: 'avatar'},
    name: 'Cristofer Carder Junior',
    description: 'UI\\UX Designer, Web Designer,\nMobile App Designer, UI\\UX Designer,\n Web Designer,Mobile App Designer',
    city: 'Lviv, Ukraine',
    numberOfFullStars: 4,
    hasHalfStar: true,
    numberOfReviews: 234
  };

  public stars: Array<number>;

  constructor() {
    this.stars = Array(this.person.numberOfFullStars).fill(0).map((x, i) => i);
  }
}

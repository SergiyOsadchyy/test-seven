import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.scss']
})
export class LeftCardComponent {
  @Input() public numberOfStars: number = 4;
  @Input() public description: string = 'UI\\UX Designer, Web Designer,\n' +
    'Mobile App Designer, UI\\UX Designer, Web Designer,Mobile App Designer';
  @Input() public city: string = 'Lviv, Ukraine';

  @Input() public avatar: any = {src: 'assets/images/shared/controls/left-card/avatar.svg', alt: 'avatar'};
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


  public stars: Array<number>;

  constructor() {
    this.stars = Array(this.numberOfStars).fill(0).map((x, i) => i);
  }
}

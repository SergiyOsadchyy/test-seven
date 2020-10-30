import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.scss']
})
export class LeftCardComponent implements OnInit {
  @Input() public languages: Array<any>;

  @Input()
  public person:
    { avatar: {src: string, alt: string },
      name: string,
      description: string,
      city: string,
      numberOfFullStars: number,
      hasHalfStar: boolean,
      numberOfReviews: number
    };

  public stars: Array<number>;

  constructor() { }

  ngOnInit(): void {
    this.stars = Array(this.person.numberOfFullStars).fill(0).map((x, i) => i);
  }
}

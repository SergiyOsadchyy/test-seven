import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.scss']
})
export class LeftCardComponent {
  @Input() public numberOfStars: number = 4;
  public stars: Array<number>;

  constructor() {
    this.stars = Array(this.numberOfStars).fill(0).map((x, i) => i);
  }
}

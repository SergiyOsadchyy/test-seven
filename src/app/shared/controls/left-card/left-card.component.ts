import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.scss']
})
export class LeftCardComponent implements OnInit {
  @Input() public languages$: Observable<Array<{src: string, name: string}>>;
  @Input() public person$: Observable<any>;
  @Output() public avatarEdit: EventEmitter<void> = new EventEmitter<void>();
  @Output() public dataEdit: EventEmitter<void> = new EventEmitter<void>();
  @Output() public languageSelect: EventEmitter<string> = new EventEmitter<string>();

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
    this.person$
      .subscribe(p => {
        this.person = p;
        this.stars = Array(this.person.numberOfFullStars).fill(0).map((x, i) => i);
      });
  }

  onAvatarEdit(): void {
    this.avatarEdit.emit();
  }

  onDataEdit(): void {
    this.dataEdit.emit();
  }

  onLanguageSelect(name: string): void {
    this.languageSelect.emit(name);
  }
}

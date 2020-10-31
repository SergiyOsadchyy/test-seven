import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DemoDatasource } from './demo.datasource';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  providers: [DemoDatasource]
})
export class DemoComponent implements OnInit {
  public languages$: Observable<Array<{src: string, name: string}>>;
  public person$: Observable<any>;

  constructor(public datasource: DemoDatasource) { }

  ngOnInit(): void {
    this.languages$ = this.datasource.getLanguages();
    this.person$ = this.datasource.getPerson();
  }

  onAvatarEdit(): void {
    // TODO: develop AvatarEdit feature
  }

  onDataEdit(): void {
    // TODO: develop DataEdit feature
  }

  onLanguageSelect(name: string): void {
    // TODO: develop LanguageSelect feature
    console.log(name);
  }
}

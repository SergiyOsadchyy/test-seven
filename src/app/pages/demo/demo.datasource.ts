import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DemoDatasource {
  public getLanguages(): Observable<Array<{src: string, name: string}>> {
    const languages = [
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
    return of(languages);
  }

  public getPerson(): Observable<any> {
    const person = {
      avatar: {src: 'assets/images/shared/controls/left-card/avatar.svg', alt: 'avatar'},
      name: 'Cristofer Carder Junior',
      description: 'UI\\UX Designer, Web Designer,\nMobile App Designer, UI\\UX Designer,\n Web Designer,Mobile App Designer',
      city: 'Lviv, Ukraine',
      numberOfFullStars: 4,
      hasHalfStar: true,
      numberOfReviews: 234
    };
    return of(person);
  }
}

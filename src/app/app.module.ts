import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftCardComponent } from './shared/controls/left-card/left-card.component';
import { DemoComponent } from './pages/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftCardComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

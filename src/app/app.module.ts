import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DisplayPanelComponent } from './display-panel/display-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    DisplayPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { CharactersComponent } from './characters/characters.component';
import { MonstersComponent } from './monsters/monsters.component';

@NgModule({
  declarations: [
    AppComponent,
    SynopsisComponent,
    CharactersComponent,
    MonstersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

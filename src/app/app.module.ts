import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovbarComponent } from './component/novbar/novbar.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { PersonaComponent } from './component/persona/persona.component';
import { PersonasComponent } from './component/personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    NovbarComponent,
    BuscadorComponent,
    PersonaComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

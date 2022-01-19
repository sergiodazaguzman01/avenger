import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovbarComponent } from './component/novbar/novbar.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { PersonaComponent } from './component/persona/persona.component';
import { PersonasComponent } from './component/personas/personas.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTING} from "./app.routes";
import {PersonaService} from "./service/personas.service";
import { VotosComponent } from './component/votos/votos.component';

@NgModule({
  declarations: [
    AppComponent,
    NovbarComponent,
    BuscadorComponent,
    PersonaComponent,
    PersonasComponent,
    HomeComponent,
    AboutComponent,
    VotosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

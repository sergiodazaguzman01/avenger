/**
 * Archivo que gestiona las rutas de toda la aplicación
 *
 *
 */



/**
 * Importacciones necesarias de los componentes
 */

import {HomeComponent} from "./component/home/home.component";
import {AboutComponent} from "./component/about/about.component";
import {PersonaComponent} from "./component/persona/persona.component";
import {NovbarComponent} from "./component/novbar/novbar.component";
import {PersonasComponent} from "./component/personas/personas.component";
import {BuscadorComponent} from "./component/buscador/buscador.component";
import {Router, RouterModule, ROUTES} from "@angular/router";

/**
 * Constante la cual tendrá todas la rutas la cuales se tienen acceso a la aplicación
 */
const APP_ROUTES =  [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "personas", component: PersonasComponent },
  { path: "navbar", component: NovbarComponent },
  { path: "perona/:id", component: PersonaComponent },
  { path: "buscar/:termino", component: BuscadorComponent },
  { path: "**",pathMatch:"full",redirectTo:"home" }
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);

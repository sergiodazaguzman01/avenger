import { Component } from '@angular/core';
import {PersonaService} from "../../service/personas.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {
  personaje: any = {};

  constructor(private _personaService: PersonaService,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.personaje = this._personaService.getPersona(params['id'])
    })

  }


}

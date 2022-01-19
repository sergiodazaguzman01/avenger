import { Component, OnInit } from '@angular/core';
import {Persona, PersonaService} from "../../service/personas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  per: Persona[] = [];


  constructor(private _personaService: PersonaService,
              private router: Router) { }

  ngOnInit(): void {
    this.per = this._personaService.getPersonas();
  }

  verPersona(idx: number) {
    this.router.navigate(['/personajever/', idx]);
  }

  public setLike(i:number){
    this._personaService.like(i);

  }
  public setDisLike(i:number){
    this._personaService.disLike(i);
  }

}

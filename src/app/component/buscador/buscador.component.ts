import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PersonaService} from "../../service/personas.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  person: any [] =[];
  termino: string ="";

  constructor(private activatedRoute: ActivatedRoute,
              private _personaService: PersonaService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino=params['termino'];
      this.person=this._personaService.buscarPersonaje(this.termino);
      console.log(this.person);
    })
  }
  verPersonaj(idx: number) {
    this.router.navigate(['/personajever/', idx]);
  }

}

import { Component, OnInit } from '@angular/core';
import {Persona, PersonaService} from "../../service/personas.service";

@Component({
  selector: 'app-votos',
  templateUrl: './votos.component.html',
  styleUrls: ['./votos.component.css']
})
export class VotosComponent implements OnInit {

  avengers:Persona []=[];
  PersonasOrganizadas:Persona []=[];

  constructor(private _avengersService:PersonaService) { }

  ngOnInit(): void {
    this.avengers=this._avengersService.getPersonas();
    this.organizarPersonasLike();
  }

  private organizarPersonasLike(){
    let mayorLke:number=this.avengers[0].me_gusta;
    let mayorDislike:number=this.avengers[0].no_me_gusta;

    let posi_mayor_megusta:number=0;
    let posi_mayor_no_megusta:number=0;

    for(let i=0; i<this.avengers.length;i++){
      if (this.avengers[i].me_gusta>mayorLke){
        mayorLke=this.avengers[i].me_gusta;
      }
    }

    for(let i=0; i<this.avengers.length;i++){
      if (this.avengers[i].no_me_gusta>mayorDislike){
        mayorDislike=this.avengers[i].no_me_gusta;
      }
    }

    for (let index = 0; index < this.avengers.length; index++) {
      if (this.avengers[index].me_gusta==mayorLke) {
        posi_mayor_megusta= index;
      }
      if (this.avengers[index].no_me_gusta==mayorDislike) {
        posi_mayor_no_megusta= index;
      }
    }



    /**
     * En la posición cero del arreglo avengersOrganizado va a ir ubicado el mayor de los megusta y en la posicion 1 el mayor de los no me gusta
     */
    this.PersonasOrganizadas.push(this.avengers[posi_mayor_megusta]);
    this.PersonasOrganizadas.push(this.avengers[posi_mayor_no_megusta]);

  }

}

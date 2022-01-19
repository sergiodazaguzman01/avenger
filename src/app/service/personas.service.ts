import {Injectable} from "@angular/core";


@Injectable()
export class  PersonaService {
  private persona: Persona[] = [
    {
      img: "assets/img/Hulk.webp",
      nombre: "Hulk",
      alias: "hulkmini",
      especie: "hombre verde musculo",
      nacionalidad: "Colombiano",
      fechaNacimiento: "10 de enero 2022",
      frase: "Hola"
    }
  ];

    constructor() {
    console.log("servicio listo para usarse");
  }

  getPersonas(): Persona[] {
    return this.persona;
  }

  getPersona(idx: number) {
    return this.persona[idx];
  }

  buscarPersonaje(termino: string): Persona[] {
    let PersonajeArr: Persona[] = [];
    termino = termino.toLowerCase();
    this.persona.forEach(per => {
      let nombre = per.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        PersonajeArr.push(per);
      }
    });
    return PersonajeArr;
  }
}

export interface Persona {
  nombre: string;
  alias: string;
  especie: string;
  nacionalidad: string;
  fechaNacimiento: string;
  frase: string;
  img: string;
}

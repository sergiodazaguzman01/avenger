import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-novbar',
  templateUrl: './novbar.component.html',
  styleUrls: ['./novbar.component.css']
})
export class NovbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarPersona(termino:string){
    this.router.navigate(['/buscar',termino])
  }
}

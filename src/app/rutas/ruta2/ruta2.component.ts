import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta2',
  templateUrl: './ruta2.component.html',
  styleUrls: ['./ruta2.component.css']
})
export class Ruta2Component implements OnInit {

  constructor(private rutas:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // http://localhost:4200/ruta2/1/a
    let parametros=this.rutas.snapshot.paramMap;
    console.log(parametros.get("id")) //1
    console.log(parametros.get("seccion"))//a

    this.router.navigate(['/error'])

  }

}

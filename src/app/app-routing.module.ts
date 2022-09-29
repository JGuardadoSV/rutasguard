import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Ruta1Component} from "./rutas/ruta1/ruta1.component";
import {Ruta2Component} from "./rutas/ruta2/ruta2.component";
import {Sub1Component} from "./rutas/ruta2/sub1/sub1.component";
import {Sub2Component} from "./rutas/ruta2/sub2/sub2.component";
import {ProhibidoComponent} from "./prohibido/prohibido.component";
import {MiGuardGuard} from "./mi-guard.guard";


const routes: Routes = [

  {path:"ruta1",component:Ruta1Component,canActivate:[MiGuardGuard]},
  {path:"prohibido",component:ProhibidoComponent},
  // http://localhost:4200/ruta2/1/a
  //{path:"ruta2/:id/:seccion",component:Ruta2Component},

// http://localhost:4200/ruta2/sub1
  {path:"ruta2",component:Ruta2Component,
  children:[
    {path:"sub1",component:Sub1Component},
    {path:"sub2",component:Sub2Component},
    {path:"**",redirectTo:"/ruta2",pathMatch:"full"}
  ],canActivate:[MiGuardGuard]},
  //ruta para error 404
  //{path:"**",redirectTo:"/ruta1",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

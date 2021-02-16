import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 listaEstudiantes: any[] = [
   {
     nombre: "Tomas Gonzales", 
     estado: "Promocionado"
   },

   {
    nombre: "Lucas Perez", 
    estado: "Regular"
  } ,

  {
    nombre: "Juan Garcia",
     estado: "Regular"
  } ,

  {
    nombre: "Marta Lopez",
     estado: "Promocionado"
  } 

  ,

  {
    nombre: "Nicolas Gomez",
     estado: "Libre"
  } 
  ,

  {
    nombre: "Patricia Funes",
     estado: "Libre"
  } 

  


]

mostrar = true;

 toggle(): void{

  this.mostrar = !this.mostrar;

 }

}



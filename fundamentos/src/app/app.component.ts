import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // = es asignacion y == es comparacion
 nombreFramework : string = "Angular";
 horasBootcamp : number = 300;
 especialista : string = "Luisa";
contenidoBootcamp ={
  tecnologia1: " HTML",
  tecnologia2: " CSS",
  tecnologia3: " JS",
  tecnologia4: " ANGULAR",
  tecnologia5: " NODE.JS",
}
  objetoProducto = {
nombre: " galleta",
cantidad: 30,
vendido: true

  }

  colorFondo : string = "colorVioleta"

  islogged: boolean = false;
isDelete : Boolean = false;
isShowed: boolean = false;


productos: string[] = ["carros", "motos", "bicicletas"]




  //funciones o metodos

 saludo(){
  console.log("hola soy un boton al que le diste click")
 }

manejarMouseOver(){
  this.colorFondo = "colorRojo";
}

manejarMouseOut(){
  this.colorFondo = "colorVerde";
}

manejarClick(){
  this.colorFondo = "colorVioleta";
}



  // exportaciones - ciclo de vida

}

 


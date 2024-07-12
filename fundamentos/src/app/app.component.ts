import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// formularios driven-templates
import { FormsModule } from '@angular/forms';
// Grupos y controles para formularios reactivos
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
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

colorFavorito : string = "";
nombre: string = "";


// -------------------------------------------------------------------------
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

//formularios
// Ç-----------------------------------------------------------
manejarEnvio(){
  alert("los datos del formulario son:" + this.colorFavorito + "-" + this.nombre);
}

// FORMULARIOS REACTIVOS
// 1. crear el grupo -> depende de lo que haga el formulario
//2. crear los controles -> depende de los inputs que usted quiere almacenar

login = new FormGroup({
correo : new FormControl(""),
contrasenia : new FormControl("")
})

manejarSubmit(){

  console.log(" Estos son los datos de mi formulario:", this.login.value)
}

}







  // exportaciones - ciclo de vida


 


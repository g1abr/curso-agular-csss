import { Component, OnInit, OnDestroy } from '@angular/core';
import { timeout } from 'rxjs';

export type Proucto = {

  nombre: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.css']
})
export class ListaBasicaComponent implements  OnInit {
  listaElemento: Proucto[]= [{

    nombre: 'leche',
    precio: 2,
    descripcion: 'Leche procesada en mercurio '
  },
{
  nombre:'Carne',
  precio: 10,
descripcion:'Carne de lomo de la madre de duque jeje  '
},
{

  nombre:'Pollo',
  precio: 20,
descripcion:'Lumier '
}
];
  
  cargando: boolean = true ; 
textAlign: { [klass: string]: any; }|null|undefined;
  cambiarCargando(){
    this.cargando =!this.cargando
  }

  //ngSwitch
  opcion: number = 0;

  //funcion
  escogerOpcion(opcionEscogida: number){
    this.opcion =opcionEscogida; //dado que valor cambia iplica un cambio en los elementos 
  }


  ngOnInit(): void {
 //   timeout 
  }
 


}

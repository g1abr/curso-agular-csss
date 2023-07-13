import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Icontacto } from 'src/app/modules/listas/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrls: ['./lista-contacto.component.css']
})
export class ListaContactoComponent implements OnInit, OnDestroy{

  // en el componente podriamos tener su estado 

  // Creamos una listas 
  listaContactos: Icontacto []= []; 

  // para usar el servicio debemos inyectarlo en el constructor 

constructor(private contactoService: ContactoService){}


  ngOnInit(): void {
  //  Obtener la lista de contactos que nos brinda el servicio 
// Los servicios pueden tardar entoces la lista de contacto tiene que esperar que la informacion ESTE LISTA 
  this.contactoService.obtenerContactos()
  .then((lista: Icontacto[])=> this.listaContactos = lista)
  .catch((error) => console.error(`Hahabido un error al recuperar los contactos: ${error}`))
  .finally(() => console.log('Peticion de lista de contactos terminada '));

  }
  // Variable 
  contactoSeleccionado: Icontacto | undefined;

obtenerContacto(id: number){
  // console.log(`Obtener info del contacto : ${id}`); 
   this.subscription = this.contactoService.obtenerContactoId(id)?.subscribe(
    (contacto: Icontacto) => this.contactoSeleccionado = contacto)
  }

  //temenos que definir la subcripcion para buenas practicas las variables debe ir arriba, pero necesito asociar las varibles con las fuciones 
  //por eso lo hago XD 

  subscription: Subscription |  undefined;

  //para tener buena tecnica debemos implementar OnDestroy 
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}

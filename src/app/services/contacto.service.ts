import { Injectable } from '@angular/core';

//importamos  la lista de contacto MOCKS 
import { CONTACTOS } from '../mocks/contactos.mocks';
import { Icontacto } from '../modules/listas/contacto.interface';
// import observables  de jrxjs
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { } //promesa y tipo de promesa que resivex 
  obtenerContactos(): Promise<Icontacto[]>{
    // AHORA RETORNA UNA PROMESA 
    // esperamos resolver en el futuro 
      return  Promise.resolve(CONTACTOS)
  }
  obtenerContactoId(id: number): Observable<Icontacto> | undefined {
    // Buscamos el contacto por id dentro de la lista de CONTACTOS mockeados
    const contacto = CONTACTOS.find((contacto: Icontacto) => contacto.id === id);
// Creamos un observable 

    let observable: Observable<Icontacto> = new Observable(observer => {
      observer.next(contacto); //emitir un valor a todo componente suscrito 
      observer.complete(); //No emitimos  mas valores 
    })

    if(contacto){
      return observable;
    }else{
      return;
    }
  
  }
}

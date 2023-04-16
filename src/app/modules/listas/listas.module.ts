import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';



@NgModule({
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    // EXPORTAMOS AQUELLAS CLASES (COMPONENTES, PIPES, SERVICES, ETC.) QUE QUERAMOS COMPARTIR
    //A QUIEN IMPORTE ESTE MÓDULO
        ListaBasicaComponent
      ]
})
export class ListasModule { }

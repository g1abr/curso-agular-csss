import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ListasModule } from './modules/listas/listas.module';
import { ListaContactoComponent } from './components/lista-contacto/lista-contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaContactoComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ListasModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

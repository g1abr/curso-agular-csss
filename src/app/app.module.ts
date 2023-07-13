import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ListasModule } from './modules/listas/listas.module';
import { ListaContactoComponent } from './components/lista-contacto/lista-contacto.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaContactoComponent,
    LoginFormComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ListasModule,    
    //importar el modulo HTTPClienteMoule para hacer peticiones HTTP
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

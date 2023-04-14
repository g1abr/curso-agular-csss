import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso-angular-css';
  bienvenida= 'Bienvenido a mi sitio web';
  user='Gabriela Andrea';
  sitio='Perfil Laboral';

  recibirMensajeHijo(evento: string){
    alert(evento);
   }
  

}
 
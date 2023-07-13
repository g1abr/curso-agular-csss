import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


 constructor(private authService: AuthService){}


  ngOnInit(): void {
    this.authService.login('eve.holt@regres.in', 'cityslicka').subscribe(
      (response) => {
        console.log('Respuesta Login', response)
      },
      (error) => console.error(`Ha ocurrido un error en el proceso de login: ${error}`),
      () => console.info('Se ha completado la llamada de login a Rest')
      );


  }
 
 
}

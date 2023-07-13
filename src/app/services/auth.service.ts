import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // lo que recibe
  login(email: string, password: string): Observable<any>{
    //una peticion post pasamos la url 
    
    let body = {
      email: email,
      password: password
    }
  // devolvemos la respuesta del observable cuando la peticion http 
  // se ha completado , el componente suscrito acedera al token de login
    return this.http.post('https://regres.in/api/login', body)
                          // api de la web 
    
  }
}

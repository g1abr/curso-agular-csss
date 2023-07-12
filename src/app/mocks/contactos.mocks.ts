import { Icontacto } from "../modules/listas/contacto.interface";

 ///Exportar una lista simulada de contacto
 
// Vamos a simular que los datos vien de peticiones http
 export const CONTACTOS: Icontacto [] = [
    {
        id: 1,
        nombre: 'Ana',
        apellidos:'Machado',
        email:'gbnm',
        numero: 342342},
        {
            id: 2,
            nombre: 'Alicia',
            apellidos:'Gray',
            email:'gbnm',
            numero: 342342
        },
            
        {
                id: 3,
                nombre: 'Daniela',
                apellidos:'Silva',
                email:'nhj',
                numero: 342342
        }
 ] 
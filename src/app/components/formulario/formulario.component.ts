import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit,  OnDestroy, OnChanges  {
  @Input() nombre: String="Gabriela Andrea Machado Silva";
  mens: String ="Mis primeros pasos en el From-End";
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(){}
  ngOnInit(): void {
    console.log("ngOnInit del componente Salud");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Valor anterior.',changes['nombre'].previousValue);
    console.log('Valor nuevo.',changes['nombre'].currentValue);
  }
  
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }
 

  //evento desde el mismo elemento 
  alerteSaludo(): void{
    alert(`Hola, ${this.nombre}. Alerta despachada desde el elemento hijo.`);
  }
   
  //evento que se ejecuta en el padre Output
  enviarMensajeAlPadre(): void{
    this.mensajeEmitter.emit(`Hola, ${this.nombre}. Eviamos un mensaje desde el elemento hijo y se ejecuta en el padre.`);
   }
   

}

import {Component, Input, Output, EventEmitter} from '@angular/core';



@Component({
    selector: 'saludar-app',
    templateUrl: './saludar.component.html',
    styleUrls: ['./saludar.component.css'] 
    
}
)

export class SaludarComponent{
@Input() nombre:string ="Jesus";
@Output() saludar: EventEmitter<string> = new EventEmitter<string>();

public nombreNuevo:Object=null;
public nombres: Array<Object> = [];
constructor(){
}
onClick(){
    this.saludar.emit('Hola desde el componente hijo');
}

onButtonClick(){
   this.nombreNuevo=(<HTMLInputElement>document.getElementById('nombreNuevo')).value; 
   
  this.nombres.push(this.nombreNuevo);  
    //this.nombres.push(this.nombreNuevo);
    this.nombreNuevo='';
    //console.log(this.nombreNuevo);
    console.log(this.nombres);
}
}


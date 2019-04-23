import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: 'empleado.component.html'
})

export class EmpleadoComponent{
    public titulo:string; 
    public empleado:Empleado;  
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color_seleccionado:string;

    constructor(){
        this.titulo='Juan';        
        this.empleado = new Empleado('juan',18,'Ing',true);
        this.trabajadores=[
            new Empleado('juan1',18,'Ing',true),
            new Empleado('maria',18,'Ing',false),
            new Empleado('juan3',18,'Ing',true)
        ];
        this.trabajador_externo=true;
        this.color_seleccionado = 'blue';
    }

    //ejecuto inmediato despues del constructor
    ngOnInit(){
        this.cambiarNombre();
       // console.log(this.empleado);
    }

    cambiarNombre(){
        this.titulo="Maria";
    }

    cambiarExterno(valor){
        this.trabajador_externo=valor;
    }

    logColorSeleccionado() {
        console.log(this.color_seleccionado);
    }
}
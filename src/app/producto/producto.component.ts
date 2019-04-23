import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { Producto } from './producto';
import { Router } from '@angular/router';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'producto',
    templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit{
    @Input() titulo:string;
    @Input() tituloDos:string;
    @Input() listaProducto:Array<Producto>;
   
   // @Input() producto:Producto;
  //  @Input() nombreCuenta:string;
   // @Input() numeroCuenta:string;

    constructor(
        private _router:Router
    ){}

    ngOnInit(){
        
    }

   redirigir(id){//, { queryParams: { id: id }}
       this._router.navigate(['/detalle/'+id] );
   }

}
import { Component, Input  } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto';
import { Router } from '@angular/router';
import { MisproductosService } from './misproductos.service';


@Component({
    selector: 'misproductos',
    templateUrl: './misproductos.component.html',
    providers: [MisproductosService]
})
export class MisproductosComponent{
    public titulo = 'MIS PRODUCTOS';
    public listaProducto:Array<Producto>;
    public tituloHijo:string;
    public tituloHijoDos:string;
    public listaProducto2:Array<Producto>;
    public tituloHijo2:string;
    public tituloHijoDos2:string;
    public show_loader = true;

    constructor(
        private _misproductosService: MisproductosService,
        private _router:Router
    ){
        this.tituloHijo = 'Cuentas';
        this.tituloHijoDos = 'Saldo';
        
        this.tituloHijo2 = 'Prestamos';
        this.tituloHijoDos2 = 'Monto Cuota';
    }

    ngOnInit(){
        this._misproductosService.getCuentas().subscribe(
            result => {
                this.listaProducto = result.data; 
                this.listaProducto2 = result.data;  
                this.show_loader = false;
            },
            error => {
                console.log('bla');
            }
        )
    }

    logOut(){
       this._router.navigate(['/'] );
   }



    
}
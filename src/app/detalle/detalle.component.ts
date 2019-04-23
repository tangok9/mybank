import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { DetalleService } from './detalle.services';
import { Detalle } from './detalle';

@Component({
    selector: 'detalle',
    templateUrl: './detalle.component.html',
    providers: [DetalleService]
})
export class DetalleComponent{
    public titulo = 'Detalle de cuenta';
    public DetalleCuenta:Detalle;

    public tipoCuenta:string;
    public simboloMoneda:string;
    public numeroCuenta:string;
    public cuentaCliente:string;
    public alias:string;
    public moneda:string;
    public ibam:string;
    public montoTransito:string;
    public balance:string;
    public estado:string;
    public parametro:String;
    @Input() idCuenta:string;
    public show_loader = true;
    
 
    constructor(
        private _router:Router,   private _misproductosService: DetalleService, private route: ActivatedRoute
    ){}

    ngOnInit() {
        var self = this;
        /*
        this.route.queryParams
          .subscribe((params: any) => {
            self.obtenerDetalle(
                params.id);
        });*/
        this.route.params.forEach((params:Params) => {
            this.parametro = params['id'];
            self.obtenerDetalle(
                params.id);
        });
      }

    obtenerDetalle(id){
        this._misproductosService.getDetalle(id).subscribe(
            result => {
                   this.tipoCuenta= result.data["tipoCuenta"];
                   this.simboloMoneda=result.data["simboloMoneda"];
                   this.numeroCuenta=result.data["numeroCuenta"];
                   this.cuentaCliente= result.data["cuentaCliente"];
                   this.alias=result.data["alias"];
                   this.moneda= result.data["moneda"];
                   this.ibam= result.data["ibam"];
                   this.montoTransito=result.data["montoTransito"];
                   this.balance= result.data["balance"];
                   this.estado= result.data["estado"];
                   this.show_loader = false;
            },
            error => {
                console.log('bla');
            }
        )
    }

    back(){
        this._router.navigate(['/misproductos']);
    }

    
}
import { Injectable } from '@angular/core';
import { Http, Response, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators'; 
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { UTILS } from '../utils';

@Injectable()
export class MisproductosService {
    public cuentasUrl: string;

    constructor(private _http: Http) {
        this.cuentasUrl = GLOBAL.urlMisProductos;
    }

    getPrueba() {
        return 'Hola mundo desde servicio';
    }

    getCuentas() {
    let headers = new Headers({ 
        'Content-type': 'application/json',
        'token':UTILS.getToken()
    });
        return this._http.get(this.cuentasUrl, { headers: headers })
        .map(res => res.json());
    }
}
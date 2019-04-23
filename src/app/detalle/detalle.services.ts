import { Injectable} from '@angular/core';
import { Http, Response, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators'; 
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { UTILS } from '../utils';

@Injectable()
export class DetalleService {
    public detalleUrl: string;

    constructor(private _http: Http) {
        this.detalleUrl =  GLOBAL.urlDetalle;
    }

    getPrueba() {
        return 'Hola mundo desde servicio';
    }

    getDetalle(id:string) {
        let headers = new Headers({ 
            'Content-type': 'application/json',
            'token':UTILS.getToken()
        }); //http://MyBankBackAccountsV1.mybluemix.net/api/getAccount?id=3 
        return this._http.get(this.detalleUrl+'?id='+id, { headers: headers })
        .map(res => res.json());
    }
}
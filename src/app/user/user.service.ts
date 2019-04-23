import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

@Injectable()
export class UserServices {
    public url: string;

    constructor(private _http: Http) {
        this.url = GLOBAL.urlRegisterUser;
    }

    register(user_to_register) {
        let params = JSON.stringify(user_to_register);
        let headers = new Headers({ 'Content-type': 'application/json' });
        console.log(params);
        return this._http.post(GLOBAL.urlRegisterUser, params, { headers: headers })
            .map(res => res.json());
    }

    login(user_to_login, gettoken=null) {
        if(gettoken != null){
            user_to_login.gettoken = gettoken;
        }
        user_to_login.username= user_to_login.correo;
        let params = JSON.stringify(user_to_login);
        let headers = new Headers({ 'Content-type': 'application/json'});
        console.log(params);
        return this._http.post(GLOBAL.urlLogin, params, { headers: headers })
            .map(res => res.json());
    }
}
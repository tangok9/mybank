import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../user/user';
import { GLOBAL } from '../global';
import { UserServices } from '../user/user.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [UserServices]
})

export class RegisterComponent implements OnInit{
    public title: String;
    public user: User;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserServices
    ) {
        this.title = 'Registro'
        this.user = new User('','','','','','ROLE_USER','',);
    }

    ngOnInit(){
        console.log('Register.component cargado');
    }

    onSubmit(){
        console.log(this.user);
        this._userService.register(this.user).subscribe(
            response=>{
                this.user = response.user;
            },
            error => {
                console.log(<any>error);
            }
        );
    }


}
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UserServices } from '../user/user.service';
import { User } from '../user/user';
import { GLOBAL } from '../global';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UserServices]
})

export class LoginComponent implements OnInit {
    public title: String;
    public user: User;
    public token: string;
    public estatus: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserServices
    ) {
        this.title = ' Bank'
        this.user = new User('', '', '', '', '', 'ROLE_USER', '');
    }

    ngOnInit() {
        console.log('Login.component cargado');
    }

    onSubmit() {
        console.log(this.user);
        //this._router.navigate(['/misproductos']);
        //Loguar al usuairo
        this._userService.login(this.user).subscribe(
            response => {
                let data = response.data;
                if (response.success) {
                    var a = document.getElementById('logOut');
                    a.classList.remove("hide");

                    var a = document.getElementById('logo');
                    a.classList.remove("hide");
                    localStorage.setItem('data', JSON.stringify(data));
                    this._router.navigate(['/misproductos']);
                } else {
                    this.estatus = 'Error de autenticación';
                }

            })
    }
}
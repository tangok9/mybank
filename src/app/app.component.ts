import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular4 mio';

  constructor(
    private _router: Router
  ){ 



  }

  logOut() {
    var a = document.getElementById('logOut');
    a.className += " hide";

    var a = document.getElementById('logo');
    a.className += " hide";
    this._router.navigate(['/']);
  }
}

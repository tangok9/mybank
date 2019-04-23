import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FrutaComponent} from './fruta/fruta.component';
import { EmpleadoComponent} from './empleado/empleado.component';
import { MisproductosComponent } from './misproductos/misproductos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    MisproductosComponent,
    DetalleComponent,
    ProductoComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { MisproductosComponent } from './misproductos/misproductos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path:'', component: LoginComponent},
    {path:'misproductos', component: MisproductosComponent},
    {path:'detalle/:id', component: DetalleComponent},
    {path:'fruta', component: FrutaComponent},
    {path:'empleado', component: EmpleadoComponent},
    {path:'registro', component: RegisterComponent},
    {path:'login', component: LoginComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
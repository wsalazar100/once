import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './pagina/error/error.component';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './componente/vehiculos/vehiculo/vehiculo.component';


const routes: Routes = [ 
  // { path:"principal", component: AppComponent},
  { path:"vehiculo/:idvehiculo", component: VehiculoComponent},
  { path:"", component: ErrorComponent },
  { path:"**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

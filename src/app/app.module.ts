import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pagina/principal/principal.component';
import { TipoVehiculoComponent } from './componente/tipo-vehiculo/tipo-vehiculo.component';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { VehiculosComponent } from './componente/vehiculos/vehiculos.component';
import { ErrorComponent } from './pagina/error/error.component';
import { VehiculoComponent } from './componente/vehiculos/vehiculo/vehiculo.component';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TipoVehiculoComponent,
    VehiculosComponent,
    
    ErrorComponent,
    
    VehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

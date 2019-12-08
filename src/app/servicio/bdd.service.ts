import { Injectable } from '@angular/core';
import { TipoVehiculoDTO } from '../DTO/TipoVehiculoDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AVehiculo } from '../modelo/vehiculo/AVehiculo';

@Injectable({
  providedIn: 'root'
})
export class BddService {
  private lstTipoVehiculo: TipoVehiculoDTO[]; 
  
  baseUrl = 'http://localhost:63112/';

  constructor(private http: HttpClient) { 
    let tipoMoto = new TipoVehiculoDTO();
    tipoMoto.idTipoVehiculo = 1;
    tipoMoto.tipoVehiculos = "Moto";

    let tipoCamion = new TipoVehiculoDTO();
    tipoMoto.idTipoVehiculo = 2;
    tipoMoto.tipoVehiculos = "Camion";
  }

  getTipoVehiculo(){
     let url = this.baseUrl + "api/tvehiculo";
     let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
     return this.http.get(url);
   }

   getCombustiblePorTipoVehiculo(tipoSel:number,tipoMedida='L'){ 
    let url = this.baseUrl + "api/CombustiblePorTipoVehiculo/" + tipoSel + "/" + tipoMedida;
    let httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   }
    return this.http.get(url);
   }

   getVehiculoPorTipo(tipoSel:number){ 
    let url = this.baseUrl + "api/VehiculoPorTipo/" + tipoSel;
    let httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   }
    return this.http.get(url);
   }

    borrarVehiculo(idvehiculo:number){ 
     alert("Esta seguro de borrar " + idvehiculo);
    let url = this.baseUrl + "api/Vehiculo/"  + idvehiculo;

    return this.http.delete(url);
   }

   grabarVehiculo(vehiculo: AVehiculo){ 
   let url = this.baseUrl + "api/Vehiculo"
   return this.http.post( url, vehiculo )
  }

  actualizarVehiculo(vehiculo: AVehiculo){ 
    let url = this.baseUrl + "api/Vehiculo/" + vehiculo.idvehiculo
    return this.http.put( url, vehiculo )
   }
}

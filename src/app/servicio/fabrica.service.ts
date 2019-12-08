import { Injectable } from '@angular/core';
import { Moto } from '../modelo/vehiculo/implementacion/Pasajeros/Moto';

import { Automovil } from '../modelo/vehiculo/implementacion/Pasajeros/Automovil';

import { Van } from '../modelo/vehiculo/implementacion/Pasajeros/VAN';
import { Bus } from '../modelo/vehiculo/implementacion/Pasajeros/BUS';
import { Camion } from '../modelo/vehiculo/implementacion/Carga/Camion';
import { Camioneta } from '../modelo/vehiculo/implementacion/Carga/Camioneta';
import { ENUM_TVEHICULO } from '../modelo/enumerado/TipoVehiculo';
import { AVehiculo } from '../modelo/vehiculo/AVehiculo';


@Injectable({
  providedIn: 'root'
})
export class FabricaService {

  constructor() { }
  getVehiculo(idtipovehiculo: ENUM_TVEHICULO): AVehiculo {

    if (idtipovehiculo ==  ENUM_TVEHICULO.MOTO)
        return new Moto(); 
    if (idtipovehiculo ==  ENUM_TVEHICULO.AUTOMOVIL)
        return new Automovil(); 
    if (idtipovehiculo ==  ENUM_TVEHICULO.VAN)
        return new Van();
    if (idtipovehiculo ==  ENUM_TVEHICULO.BUS)
        return new Bus(); 
    if (idtipovehiculo ==  ENUM_TVEHICULO.CAMION)
        return new Camion(); 
    if (idtipovehiculo ==  ENUM_TVEHICULO.CAMIONETA)
        return new Camioneta();            
} 

}

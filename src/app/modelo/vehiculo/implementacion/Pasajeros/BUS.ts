import { APasajeros } from '../../AVehiculo';

import { ENUM_TTRANSPORTE } from 'src/app/modelo/enumerado/TipoTransporte';
import { ENUM_TVEHICULO } from 'src/app/modelo/enumerado/TipoVehiculo';

export class Bus extends  APasajeros {

    constructor(marca: string='', modelo: string='', anioFabricacion: number=1900, volumenTanque:number=0, cantidaPasajeros: number=0) { 
        super(marca, modelo,anioFabricacion,volumenTanque, ENUM_TTRANSPORTE.PASAJERO, ENUM_TVEHICULO.BUS, cantidaPasajeros ); 
       
    }
    
}
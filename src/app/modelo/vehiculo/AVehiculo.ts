import { ENUM_TTRANSPORTE } from '../enumerado/TipoTransporte';
import { ENUM_TVEHICULO } from '../enumerado/TipoVehiculo';


export abstract class AVehiculo {
    public idvehiculo=0;
    constructor(
        public marca: string, 
        public modelo: string, 
        public anioFabricacion: number, 
        public volumenTanque:number, 
        public tipoTransporte: ENUM_TTRANSPORTE, 
        public idtipovehiculo: ENUM_TVEHICULO) { 
    }
}

export abstract class  APasajeros extends AVehiculo {
    cantidadPasajeros: number;
    constructor(
        marca: string='', 
        modelo: string='', 
        anioFabricacion: number=1900, 
        volumenTanque:number=0, 
        tipoTransporte: ENUM_TTRANSPORTE.PASAJERO, 
        idtipovehiculo: ENUM_TVEHICULO,
        cantidadPasajeros: number=0,) { 

       super(marca, modelo, anioFabricacion, volumenTanque, tipoTransporte, idtipovehiculo);
       this.cantidadPasajeros = cantidadPasajeros;
    }
}

export abstract class  ACarga extends AVehiculo {
    tonelajeCarga: number;
    constructor(
        marca: string='', 
        modelo: string='', 
        anioFabricacion: number=1900, 
        volumenTanque:number=0, 
        tipoTransporte: ENUM_TTRANSPORTE.CARGA, 
        idtipovehiculo: ENUM_TVEHICULO,
        tonelajeCarga: number=0,) { 

       super(marca, modelo, anioFabricacion, volumenTanque, tipoTransporte, idtipovehiculo);
       this.tonelajeCarga = tonelajeCarga;
    }


    
}



export class FabricaVehiculo {
   


} 
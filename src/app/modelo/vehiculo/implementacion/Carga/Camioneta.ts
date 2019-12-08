import { ACarga } from '../../AVehiculo';
import { ENUM_TTRANSPORTE } from 'src/app/modelo/enumerado/TipoTransporte';
import { ENUM_TVEHICULO } from 'src/app/modelo/enumerado/TipoVehiculo';

export class Camioneta extends  ACarga {

    constructor(marca: string='', modelo: string='', anioFabricacion: number=1900, volumenTanque:number=0, tonelajeCarga: number=0) { 
        super(marca, modelo,anioFabricacion,volumenTanque, ENUM_TTRANSPORTE.CARGA, ENUM_TVEHICULO.CAMIONETA, tonelajeCarga ); // must call super()
       
    }
    
}
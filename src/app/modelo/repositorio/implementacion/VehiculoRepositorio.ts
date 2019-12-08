import { IVehiculoRepositorio } from '../IVehiculoRepositorio';
import { AVehiculo } from '../../vehiculo/AVehiculo';
import { Moto } from '../../vehiculo/implementacion/Pasajeros/Moto';
import { Camion } from '../../vehiculo/implementacion/Carga/Camion';
import * as _ from 'lodash';

export class VehiculoRepositorio implements IVehiculoRepositorio {
    
    private lstVehiculos: AVehiculo[]=[];
    calcularCombustible(): number {
        throw new Error("Method not implemented.");
    }    
    
    listarTodos(): AVehiculo[] {
       let moto1 = new Moto('suzuky','nova',2010,8,2);
       let camion1 = new Camion('MARK','Tracto Camión',2019,30,2);
       this.lstVehiculos.push(moto1);
       this.lstVehiculos.push(camion1);
       return this.lstVehiculos;
    }
    obtenerPorId(idvehiculo: number) {
        throw new Error("Method not implemented.");
    }
    grabar(vehiculo: AVehiculo): boolean {
        throw new Error("Method not implemented.");
    }
    actualizar(vehiculo: AVehiculo): boolean {
        throw new Error("Method not implemented.");
    }
    eliminarPorId(idvehiculo: number): boolean {
        throw new Error("Method not implemented.");
    }


}
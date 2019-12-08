import { IRepositorio } from './IRepositorio';
import { AVehiculo } from '../vehiculo/AVehiculo';

export interface IVehiculoRepositorio extends IRepositorio<AVehiculo> {
  calcularCombustible():number;
}

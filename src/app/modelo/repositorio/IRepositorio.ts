import { AVehiculo } from '../vehiculo/AVehiculo';

export interface IRepositorio<T> {
listarTodos(): T[];
obtenerPorId(idvehiculo:number);
grabar(vehiculo: T):boolean;
actualizar(vehiculo: T):boolean;
eliminarPorId(idvehiculo:number):boolean;
}



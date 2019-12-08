import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AVehiculo } from 'src/app/modelo/vehiculo/AVehiculo';
import { BddService } from 'src/app/servicio/bdd.service';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ENUM_TVEHICULO } from 'src/app/modelo/enumerado/TipoVehiculo';
import * as _ from 'lodash';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  totalCombustible: number;
  idtipomedida:string;
  @Input() vehiculos:any[];
  @Input() idtipovehiculo:number=0;
  @Output() onOperacionExitosa = new EventEmitter<number>();
  @ViewChild(VehiculoComponent, {static: false}) vehiculoCmp: VehiculoComponent;

  constructor(private bddSrv: BddService) { }

  ngOnInit() {
    

  }
  calcular(){
    alert("calcular conbustible " + this.idtipomedida);
    this.bddSrv.getCombustiblePorTipoVehiculo(this.idtipovehiculo, this.idtipomedida).subscribe(
      (res) => {
        console.log("Total combustible calculado => ",res);
        this.totalCombustible = res['cantidadCombustible'];
      }
    )
       
  }

  notificar() {
    this.onOperacionExitosa.emit(this.idtipovehiculo);
  }

  borrar(v: AVehiculo) {
    this.bddSrv.borrarVehiculo(v.idvehiculo).subscribe(
      (res) => {
          alert("borrado exitoso")
          this.notificar()
      },
      (err) => {
          alert("borrado fallido")
      }
    )
   }


   cerrar() {
    this.vehiculoCmp.inicializar();
   }

   agregar(){
    this.vehiculoCmp.crearVehiculo(this.idtipovehiculo);
   }

   grabar() {
    
    this.vehiculoCmp.grabarVehiculoFinal();

   }



   actualizar(v: AVehiculo) {
    this.bddSrv.actualizarVehiculo(v).subscribe(
      (res) => {
          alert("actualizacion exitoso")
      },
      (err) => {
          alert("actualizacion fallido")
      }
    )
   }
   
}

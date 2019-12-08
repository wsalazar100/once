import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { BddService } from 'src/app/servicio/bdd.service';
import { TipoVehiculoDTO } from 'src/app/DTO/TipoVehiculoDTO';


@Component({
  selector: 'app-tipo-vehiculo',
  templateUrl: './tipo-vehiculo.component.html',
  styleUrls: ['./tipo-vehiculo.component.css']
})
export class TipoVehiculoComponent implements OnInit {
  lstTipoVehiculo: any;
  tipoVehiculoSel: number=0;
  lstVehiculos: any;

  
  constructor( private bddSrv: BddService) { }

  ngOnInit() {
    this.bddSrv.getTipoVehiculo().subscribe(
      (res) => { 
        this.lstTipoVehiculo = res;
       },
      (err) => { console.log("error")}
    )
  }

  getVehiculoPorTipo(idtipovehiculo:number){
    //alert("TIPO SELECCIONADO => " + idtipovehiculo);
    //console.log("TIPO SELECCIONADO => " , idtipovehiculo);
    this.tipoVehiculoSel = idtipovehiculo;
    this.bddSrv.getVehiculoPorTipo(idtipovehiculo).subscribe(
      (res) => { 
        this.lstVehiculos = res;
        console.log("respuesta servidor ", res)
       },
      (err) => { console.log("error")}
    )

  }



}

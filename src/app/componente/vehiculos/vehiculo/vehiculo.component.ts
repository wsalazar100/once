import { Component, OnInit, Input,Output, AfterViewInit, EventEmitter } from '@angular/core';
import { AVehiculo } from 'src/app/modelo/vehiculo/AVehiculo';
import { Moto } from 'src/app/modelo/vehiculo/implementacion/Pasajeros/Moto';
import { NgForm } from '@angular/forms';
import { BddService } from 'src/app/servicio/bdd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FabricaService } from 'src/app/servicio/fabrica.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit,AfterViewInit {
  lstTipoTransporte: string[]=["P","C"];
  lstTipoVehiculo: any;
  vehiculo: AVehiculo;
  @Input() idtipovehiculo: number;
  @Output() onOperacionExitosa = new EventEmitter<number>();
 
  constructor(private bddSrv: BddService, private fabricaSrv: FabricaService,  public router: Router,) { }

  inicializar(){
      this.vehiculo=null;
  }

  notificar() {
    this.onOperacionExitosa.emit(this.idtipovehiculo);
  }

  ngOnInit() {
    alert("tipo pasado " + this.idtipovehiculo);
    this.crearVehiculo(this.idtipovehiculo)

    this.bddSrv.getTipoVehiculo().subscribe(
      (res) => { 
        this.lstTipoVehiculo = res;
       },
      (err) => { console.log("error")}
    )
  }
  ngAfterViewInit(){
 
  }

  crearVehiculo(idtipovehiculo:number) {
    this.vehiculo =  this.fabricaSrv.getVehiculo(idtipovehiculo);

  }


  cambioTipo(idtipovehiculo:number) {
    alert("tipo vehiculo " + idtipovehiculo)
    this.vehiculo =  this.fabricaSrv.getVehiculo(idtipovehiculo);
    this.vehiculo.idtipovehiculo = idtipovehiculo;
  }

  grabarVehiculoFinal() {
    alert("escucho evento");
    this.bddSrv.grabarVehiculo( this.vehiculo )
            .subscribe( veh => {

              this.vehiculo.idvehiculo = veh["idvehiculo"];
              this.notificar();
              this.router.navigate(['/vehiculo', this.vehiculo.idvehiculo ]);

            });

  }


 

}

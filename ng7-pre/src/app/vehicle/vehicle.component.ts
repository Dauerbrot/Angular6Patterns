import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Vehicle} from "../Interfaces/vehicle";


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  constructor(private serviceVehicle: DataService) { }
  vehicleStored:Vehicle[];

  ngOnInit() {
    this.serviceVehicle.getVehicle().subscribe(result => {
      console.log('result in component');
      this.vehicleStored = result;
    })

  }
  toggleAdd:boolean = false;
  toggleMode() {
    this.toggleAdd = !this.toggleAdd;
  }
  vehicleName;

  addVehicle() {
    let createVehicle:Vehicle = {id:'', name:this.vehicleName};
    this.serviceVehicle.addVehicle(createVehicle).subscribe();
  }
}

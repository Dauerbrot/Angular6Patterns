import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";
import {Vehicle} from "../Interfaces/vehicle";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ip = '192.168.178.25';
  httpEndPoint = 'http://';
  port = ':8080/';

  constructor(private http: HttpClient) {
  }
  path = this.httpEndPoint + this.ip + this.port;

  getVehicle(): Observable<Vehicle[]> {


    return this.http.get<Vehicle[]>(this.path + 'Vehicle', {}).pipe(
      map(result => {
        return result;
      })
    )
  }

  addVehicle(vehicle:Vehicle): Observable<any>{

    return this.http.post(this.path + 'AddVehicle',vehicle,{}).pipe(result =>{
      console.log(result);
      return result;
    })

  }

  clickMe() {
    return console.log("Hello World");
  }
}

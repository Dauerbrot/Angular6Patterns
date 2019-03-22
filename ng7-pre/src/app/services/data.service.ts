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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getVehicle(): Observable<Vehicle[]> {

    const path = this.httpEndPoint + this.ip + this.port + 'Vehicle';

    return this.http.get<Vehicle[]>(path, {}).pipe(
      map(result => {
        return result;
      })
    )
  }

  clickMe() {
    return console.log("Hello World");
  }
}

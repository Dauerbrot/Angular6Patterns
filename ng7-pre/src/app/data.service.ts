import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  clickMe(){
    return console.log("Hello World");
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import { DataService } from "../services/data.service";
import {variable} from "@angular/compiler/src/output/output_ast";
import {Vehicle} from "../Interfaces/vehicle";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit,OnDestroy {

  constructor(private data:DataService) { }
  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  firstClick(){
    this.data.clickMe();
  }

}

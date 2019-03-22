import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from "./contact/contact.component";
import {VehicleComponent} from "./vehicle/vehicle.component";

const routes: Routes = [
  {path: '', component:ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'vehicle', component:VehicleComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

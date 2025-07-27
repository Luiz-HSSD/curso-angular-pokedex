import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//module
import { PagesRoutingModule } from './routing.module';
//pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class PagesModule { }

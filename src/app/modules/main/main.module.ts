import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule,MAIN_COMPONENT} from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    ...MAIN_COMPONENT
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }

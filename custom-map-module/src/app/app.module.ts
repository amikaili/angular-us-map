import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FlexmonsterPivotModule } from "ng-flexmonster";
import { GoogleChartsModule } from "angular-google-charts";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {SlMapModule } from './sl-map/components/sl-map.module';
import { AppComponent } from './app.component'; 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule ,
    FlexmonsterPivotModule,
     SlMapModule,
    GoogleChartsModule.forRoot()
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

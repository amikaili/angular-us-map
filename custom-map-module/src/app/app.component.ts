
import { Component } from '@angular/core';
@Component({
  selector: 'my-map',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  selectedState: any = [
    {'code': 'MD', 'users': 324, 'org type' :'Service Provider'},
    {'code': 'NC', 'users': 454, 'org type' :'Manufacturer'},
    // {'code':'AZ', 'users': 234, 'org type' :'Service Provider'},
    // {'code' : 'AK', 'users': 544, 'org type' :'Manufacturer'},
    // {'code' : 'CT', 'users': 544, 'org type' :'Manufacturer'},
    // {'code' : 'DC', 'users': 544, 'org type' :'Manufacturer'},
  ];
}

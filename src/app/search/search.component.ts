import { Component, OnInit } from '@angular/core';
import { Capability } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cities = [
    {name: 'Sydney', lat: -25.734968, long: '134.489563'},
    {name: 'Perth', lat: -31.953570, long: '115.856978'},
    {name: 'Brisbane', lat: -27.463565, long: '153.028225'}
  ];
  latitude = -25.734968;
  longitude = '134.489563';

  onChange(value: any) {
      console.log('the selected value is'  + value.lat);
      this.latitude = this.cities[value].lat;
      this.longitude = this.cities[value].long;
  }



  constructor() { }

  ngOnInit(): void {
  }

}

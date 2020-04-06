import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor() { }
  cities = [
    {name: 'Sydney', lat: -25.734968, long: '134.489563'},
    {name: 'Perth', lat: -31.953570, long: '115.856978'},
    {name: 'Brisbane', lat: -27.463565, long: '153.028225'}
  ];
  latitude = this.cities[0].lat;
  longitude = this.cities[0].long;
  curCity = this.cities[0];


  @Output() searchClicked: EventEmitter<any> = new EventEmitter<any>();

  onChange(value: any) {
      console.log('the selected value is'  + value.lat);
      this.latitude = this.cities[value].lat;
      this.longitude = this.cities[value].long;
      this.curCity = this.cities[value];
  }

  ngOnInit(): void {
  }
  onClick(): void {
    this.searchClicked.emit(this.curCity.name );

    console.log(`hey I was here ${this.curCity.long}`);
  }
}

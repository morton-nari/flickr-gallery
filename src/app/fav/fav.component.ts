import { Component, OnInit, Input } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination' ;

import { ApiResponse } from '../models/ApiResponse';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  favPics = JSON.parse(localStorage.getItem('favList'));
  curCity = 'Sydney';
  @Input()
  latitude: any = '';
  longitude: any = '';
  constructor() { }
   p = 1;
  errorMessage: string;
  flickrResponse: ApiResponse;
  favorites: ApiResponse;
  private ProChartStorage = {

  };
  ngOnInit(): void {
  }
}

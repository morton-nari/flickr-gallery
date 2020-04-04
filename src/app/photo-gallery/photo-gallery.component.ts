import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination' ;
import { FlikrService } from '../services/flikr.service';
import { ApiResponse } from '../models/ApiResponse';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  constructor(private flickrService: FlikrService) { }
  p = 1;
  errorMessage: string;
  flickrResponse: ApiResponse;
  favorites: ApiResponse;


private ProChartStorage = {

  getItem(key: string) {
      return localStorage.getItem(key);
  },

  setItem(key: string, value: string) {
     console.log('prochart setItem');
     localStorage.setItem(key, value);
  },

  removeItem:  (key: string) => {
      return localStorage.removeItem(key);
  },

  clear: () => {
      const keys = new Array();
      for (let i = 0, len = localStorage.length; i < len; i++) {
          const key = localStorage.key(i);
          if (key.indexOf('prochart') !== -1 || key.indexOf('ProChart') !== -1) {
              keys.push(key);
          }
      }
      // tslint:disable-next-line:no-shadowed-variable
      for (let i = 0; i < keys.length; i++) {
          localStorage.removeItem(keys[i]);
      }
  }

};
  ngOnInit(): void {
    this.flickrService.getPhotos().subscribe({
      next: flickrResponse => this.flickrResponse = flickrResponse,
      //  next: flickrResponse => console.log(flickrResponse),
      error: err => this.errorMessage = err,
    });
  }
  store(isChecked: any, picId) {
    if (isChecked ) {
      console.log(isChecked, picId);
      let pic = this.flickrResponse.photos.photo.find(obj => {
        return obj.id === picId;
        
      });
      const stringToStore = JSON.stringify(pic);
      this.ProChartStorage.setItem('test.local.pic', stringToStore);

      // for (const i in this.flickrResponse.photos.photo) {
      //   if (this.flickrResponse.photos.photo[i].id === picId) {
      //     console.log(this.flickrResponse.photos.photo[i]);
      //     this.flickrResponse.photos.photo.[i].id.push({isSelected: true}); // {a: 5, b: 6};
      //   }
      // }
    } else {
      console.log('removed');
      // this.favorites = this.favorites;
      // const stringToStore = JSON.stringify(this.favorites);
      // this.ProChartStorage.removeItem('test.local.favorites', stringToS);
    }


}




}

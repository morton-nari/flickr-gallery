import { Component, OnInit, Input } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination' ;
import { FlikrService } from '../services/flikr.service';
import { ApiResponse } from '../models/ApiResponse';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  curCity = 'Sydney';
  @Input()
  latitude: any = '';
  longitude: any = '';
  constructor(private flickrService: FlikrService) { }
   p = 1;
  errorMessage: string;
  flickrResponse: ApiResponse;
  favorites: ApiResponse;
  private ProChartStorage = {

  setItem(key: string, value: string) {
     console.log('prochart setItem');
     localStorage.setItem(key, value);
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
      // console.log(isChecked, picId);

      for (const i in this.flickrResponse.photos.photo) {
        if (this.flickrResponse.photos.photo[i].id === picId) {
          console.log(this.flickrResponse.photos.photo[i]);
          const favList = this.flickrResponse.photos.photo;
          favList[i].isSelected = true;
          const stringToStore = JSON.stringify(favList);
          this.ProChartStorage.setItem('favList', stringToStore);

          // this.flickrResponse.photos.photo[i].push({isSelected: true}); // {a: 5, b: 6};
        }
      }
    } else {
      console.log('removed');
      for (const i in this.flickrResponse.photos.photo) {
        if (this.flickrResponse.photos.photo[i].id === picId) {
          // console.log(this.flickrResponse.photos.photo[i]);
          const favList = this.flickrResponse.photos.photo;
          favList[i].isSelected = false;
          const stringToStore = JSON.stringify(favList);
          this.ProChartStorage.setItem('favList', stringToStore);
        }
      }
      }
  }
  latPassed(message: any): void {
    this.curCity = message;
  }
}

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
  p = 1;
  errorMessage: string;
  flickrResponse: ApiResponse;

  constructor(private flickrService: FlikrService) { }
  ngOnInit(): void {
    this.flickrService.getPhotos().subscribe({
      next: flickrResponse => this.flickrResponse = flickrResponse,
      //  next: flickrResponse => console.log(flickrResponse),
      error: err => this.errorMessage = err,
    });
  }

}

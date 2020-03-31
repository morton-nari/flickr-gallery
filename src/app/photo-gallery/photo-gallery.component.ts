import { Component, OnInit } from '@angular/core';
import { Photos } from '../models/Photos';
import { FlikrService } from '../services/flikr.service';
import { Photo } from '../models/Photo';
@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  errorMessage: string;
  flickrResponse: Photos[];
  constructor(private flickrService: FlikrService) { }
  ngOnInit(): void {
    this.flickrService.getPhotos().subscribe({
      next: flickrResponse => this.flickrResponse = flickrResponse,
      //  next: flickrResponse => console.log(flickrResponse),
      error: err => this.errorMessage = err,
    });
  }

}

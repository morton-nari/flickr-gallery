import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Photos } from '../models/Photos';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlikrService {
  // tslint:disable-next-line:max-line-length
  private imagesUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=902e6435893b56351c894be1a213ecbd&lat=-25.734968&lon=134.489563&format=json&nojsoncallback=1';
  // flickerUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
  constructor(private http: HttpClient) { }
  getPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this.imagesUrl).pipe(
        // tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
 }
 private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured : ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}


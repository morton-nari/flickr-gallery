import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Photos } from '../models/Photos';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Photo } from '../models/Photo';

@Injectable({
  providedIn: 'root'
})
export class FlikrService {
  // tslint:disable-next-line:max-line-length
  private imagesUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=708e061b07ea822dc935622973482b72&lat=-25.734968&lon=134.489563&format=json&nojsoncallback=1&auth_token=72157713695814443-60ca5e2bc02dab80&api_sig=ef937269cb5f76a63c854a1157b8aba6';
  // flickerUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
  constructor(private http: HttpClient) { }
  getPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this.imagesUrl).pipe(
      // testing receiving data
        tap(data => console.log('All: ' + JSON.stringify(data))),
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


import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class FlikrService {
  // tslint:disable-next-line:max-line-length
  private imagesUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9d917c77afdd07ec80e68a6f8758abbc&contacts=&lat=-25.734968&lon=134.489563&format=json&nojsoncallback=1&api_sig=b001bbcf4f6b1116f0c025e76fe92a3e';
  // flickerUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
  constructor(private http: HttpClient) { }
  getPhotos(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.imagesUrl).pipe(
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


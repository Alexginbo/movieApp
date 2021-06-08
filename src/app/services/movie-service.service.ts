import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  url = 'http://www.omdbapi.com/';
  key = '71c3992a';

  constructor(private httpClient: HttpClient) { }

  searchMovie(movieTitle: string): Observable<any>{
    return this.httpClient.get(`${this.url}?s=${encodeURI(movieTitle)}&apikey=${this.key}`
          ).pipe(map(results => results['Search']));
  }

  getMovieDetails(id){
    return this.httpClient.get(`${this.url}?i=${id}&plot=full&apikey=${this.key}`);
  }
}

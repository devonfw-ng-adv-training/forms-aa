import {Injectable} from '@angular/core';
import {Genre} from './genre';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookGenresService {
  private static GENRE_URI = '/api/genre';

  constructor(private http: HttpClient) {
  }

  public getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(BookGenresService.GENRE_URI);
  }
}

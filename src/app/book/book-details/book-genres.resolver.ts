import {Injectable} from '@angular/core';
import {Genre} from '../genre';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {BookGenresService} from '../book-genres.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookGenresResolver implements Resolve<Genre[]> {
  constructor(private genresService: BookGenresService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Genre[]> {
    return this.genresService.getGenres();
  }
}

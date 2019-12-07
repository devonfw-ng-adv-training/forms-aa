import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private book: BookService, private router: Router) {
  }

  ngOnInit() {
    this.books$ = this.book.findAll();
  }

  showBook(book: Book): any {
    this.router.navigate(['/book', book.id]);
  }

  newBook(): any {
    this.router.navigate(['/book']);
  }
}

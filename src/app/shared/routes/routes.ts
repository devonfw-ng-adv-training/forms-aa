import {BookDetailsComponent} from '../../book/book-details/book-details.component';
import {HomeComponent} from '../home/home.component';
import {Routes} from '@angular/router';
import {BookOverviewComponent} from '../../book/book-overview/book-overview.component';
import {BookDetailsResolver} from '../../book/book-details/book-details.resolver';
import {BookGenresResolver} from '../../book/book-details/book-genres.resolver';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookOverviewComponent
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
    resolve: {
      book: BookDetailsResolver,
      bookGenres: BookGenresResolver
    }
  },
  {
    path: 'book',
    component: BookDetailsComponent
  },
  {
    path: 'order',
    loadChildren: () => import('./../../order/order.module').then(m => m.OrderModule)
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

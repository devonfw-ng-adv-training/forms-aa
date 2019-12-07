import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {BookService} from '../book/book.service';
import {CustomizedSelectBoxComponent} from './custom-components/customized-select-box/customized-select-box.component';
import {BookGenresService} from '../book/book-genres.service';
import {MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  declarations: [ToolbarComponent, NavigationComponent, HomeComponent, CustomizedSelectBoxComponent],
  exports: [
    CommonModule,
    ToolbarComponent,
    NavigationComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CustomizedSelectBoxComponent
  ]
})
export class SharedModule {
  /**
   * Use this method in your root module to provide singleton services from ALL modules including this shared one.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      // put here providers of singleton services from ALL modules including this shared one
      providers: [BookService, BookGenresService]
    };
  }
}

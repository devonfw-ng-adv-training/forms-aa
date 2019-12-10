import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {routes} from './shared/routes/routes';
import {BookModule} from './book/book.module';
import {HttpClientModule} from '@angular/common/http';
import {OrderModule} from './order/order.module';
import {RootStoreModule} from './root-store/root-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(routes),
    // feature modules
    BookModule,
    RootStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

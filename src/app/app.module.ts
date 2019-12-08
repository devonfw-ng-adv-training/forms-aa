import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MyService} from './service.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  declarations: [AppComponent],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

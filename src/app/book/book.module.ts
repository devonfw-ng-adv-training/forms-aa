import { NgModule } from '@angular/core';
import { BookOverviewComponent } from './book-overview/book-overview.component';
import { SharedModule } from '../shared/shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowOnDirtyErrorStateMatcher, ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [MatFormFieldModule],
  declarations: [BookOverviewComponent, BookDetailsComponent],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class BookModule {}

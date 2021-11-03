import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BookCreateComponent } from "./book-create/book-create.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookFormComponent } from "./book-form/book-form.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookRoutingModule } from "./book-routing.module";

@NgModule({
  declarations: [
    BookListComponent,
    BookCreateComponent,
    BookEditComponent,
    BookDetailComponent,
    BookFormComponent,
  ],
  imports: [CommonModule, BookRoutingModule, ReactiveFormsModule],
})
export class BookModule {}

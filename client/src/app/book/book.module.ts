import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";
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
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BookRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    CheckboxModule,
    CalendarModule,
    DropdownModule,
  ],
})
export class BookModule {}

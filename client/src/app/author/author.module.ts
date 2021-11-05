import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DialogModule } from "primeng/dialog";
import { AuthorCrudComponent } from "./author-crud/author-crud.component";
import { AuthorFormComponent } from "./author-form/author-form.component";
import { AuthorRoutingModule } from "./author-routing.module";

@NgModule({
  declarations: [AuthorCrudComponent, AuthorFormComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    ReactiveFormsModule,
    DialogModule,
  ],
})
export class AuthorModule {}

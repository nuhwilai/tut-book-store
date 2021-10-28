import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorCrudComponent } from './author-crud/author-crud.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorRoutingModule } from './author-routing.module';

@NgModule({
  declarations: [
    AuthorCrudComponent,
    AuthorFormComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthorModule { }

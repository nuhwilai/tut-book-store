import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookListComponent
  },
  {
    path: 'book/create',
    component: BookCreateComponent
  },
  {
    path: 'book/edit/:id',
    component: BookEditComponent
  },
  {
    path: 'book/detail/:id',
    component: BookDetailComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }

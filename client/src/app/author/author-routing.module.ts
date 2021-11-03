import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorCrudComponent } from './author-crud/author-crud.component';

const routes: Routes = [
  {
    path: 'author',
    component: AuthorCrudComponent
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }

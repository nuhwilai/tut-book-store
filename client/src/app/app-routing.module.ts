import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), 
    BookModule, 
    AuthorModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

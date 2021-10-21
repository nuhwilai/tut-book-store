import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookModule } from './book/book.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), BookModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

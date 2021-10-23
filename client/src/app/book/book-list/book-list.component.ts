import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: any[]

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.list().subscribe({
      next: (bookList) => {
        this.bookList = bookList;
      },
      error: (error) => {
        console.error("error load list!!")
      }
    })
  }

}

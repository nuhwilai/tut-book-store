import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList = [
    { id: 1, name: "Harry Potter 1", price: 100, page: 20 },
    { id: 2, name: "Harry Potter 2", price: 200, page: 320 },
    { id: 3, name: "Harry Potter 3", price: 300, page: 420 },
    { id: 4, name: "Harry Potter 4", price: 400, page: 50 },
  ]

  constructor() { }

  ngOnInit() {
  }

}

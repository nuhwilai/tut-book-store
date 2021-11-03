import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookId: number = this.route.snapshot.params.id
  book: any

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookService.load(this.bookId)
      .subscribe({
        next: (result) => {
          this.book = result
        }
      })
  }

  deleteBook() {
    this.bookService.delete(this.bookId).subscribe({
      next: (result) => {
        alert(`delete book id ${result.id} success !!`)
        this.router.navigate(["/book"]);
      }
    })
  }

}

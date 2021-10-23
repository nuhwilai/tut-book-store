import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;
  constructor(
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = new FormGroup({
      name: new FormControl(""),
      price: new FormControl(null),
      page: new FormControl(null)
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.bookService.create(this.bookForm.value)
      .subscribe({
        next: (result) => {
          alert("created "
            + JSON.stringify(result))

          this.router.navigate(["/book/detail", result.id]);
        }
      })
  }

}

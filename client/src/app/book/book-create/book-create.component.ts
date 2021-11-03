import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookFormService } from '../book-form.service';
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
    private router: Router,
    private bookFormService: BookFormService,
  ) {
    this.bookForm = this.bookFormService.toFormGroup()
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

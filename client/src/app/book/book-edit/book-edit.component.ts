import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BookFormService } from "../book-form.service";
import { BookService } from "../book.service";

@Component({
  selector: "app-book-edit",
  templateUrl: "./book-edit.component.html",
  styleUrls: ["./book-edit.component.css"],
})
export class BookEditComponent implements OnInit {
  bookId: number = this.route.snapshot.params.id;
  bookForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private bookFormService: BookFormService
  ) {
    this.bookForm = this.bookFormService.toFormGroup();
  }

  ngOnInit() {
    this.bookService.load(this.bookId).subscribe({
      next: (book) => {
        if(book.publishDate){
          book.publishDate = new Date(book.publishDate)
        }
        this.bookForm.patchValue(book);
      },
    });
  }

  onSubmit() {
    this.isSubmitted = true
    if(this.bookForm.invalid){
      console.log(this.bookForm)
      return
    }
    this.bookService.update(this.bookId, this.bookForm.value).subscribe({
      next: (result) => {
        alert("edit id: " + this.bookId + " " + JSON.stringify(result));
        this.router.navigate(["/book/detail", result.id]);
      },
    });
  }

  deleteBook() {
    this.bookService.delete(this.bookId).subscribe({
      next: (result) => {
        alert(`delete book id ${result.id} success !!`);
        this.router.navigate(["/book"]);
      },
    });
  }
}

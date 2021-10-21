import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm = new FormGroup({
    name: new FormControl(""),
    price: new FormControl(null),
    page: new FormControl(null)
  })
  constructor() {

  }

  ngOnInit() {
  }

  onSubmit() {
    alert("create!")
    console.log(this.bookForm.value)
  }

}

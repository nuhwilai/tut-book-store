import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DropdownItem } from "primeng/dropdown";

@Component({
  selector: "app-book-form",
  templateUrl: "./book-form.component.html",
  styleUrls: ["./book-form.component.css"],
})
export class BookFormComponent implements OnInit {
  @Input() bookForm!: FormGroup;
  @Input() isSubmitted!: boolean;

  colorOptions: {
    label: string;
    value: string;
  }[];
  constructor() {}

  ngOnInit() {
    this.colorOptions = [
      { label: "-", value: null },
      { label: "Blue", value: "blue" },
      { label: "Red", value: "red" },
      { label: "Green", value: "green" },
    ];
  }

  get f() {
    return this.bookForm.controls;
  }
}

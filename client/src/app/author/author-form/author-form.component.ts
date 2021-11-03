import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-author-form",
  templateUrl: "./author-form.component.html",
  styleUrls: ["./author-form.component.css"],
})
export class AuthorFormComponent implements OnInit {
  @Input() authorForm!: FormGroup;
  constructor() {}

  ngOnInit() {}
}

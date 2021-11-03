import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class AuthorFormService {
  constructor(private fb: FormBuilder) {}

  toFormGroup() {
    return this.fb.group({
      name: [""],
    });
  }
}

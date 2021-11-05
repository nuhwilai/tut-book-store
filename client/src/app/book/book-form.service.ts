import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class BookFormService {
  constructor(private fb: FormBuilder) {}

  toFormGroup() {
    return this.fb.group({
      name: ["", Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      page: [null],
      category: [null, Validators.required],
      color: [null, Validators.required],
      publishDate: [null, Validators.required],
    });
  }
}

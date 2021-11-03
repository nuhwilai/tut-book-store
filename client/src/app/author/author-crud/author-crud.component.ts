import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AuthorFormService } from "../author-form.service";
import { AuthorService } from "../author.service";

@Component({
  selector: "app-author-crud",
  templateUrl: "./author-crud.component.html",
  styleUrls: ["./author-crud.component.css"],
})
export class AuthorCrudComponent implements OnInit {
  authorList: any[];

  authorForm: FormGroup;
  selectedAuthor: any;
  isShowModal: boolean = false;
  isCreate: boolean = false;

  constructor(
    private authorService: AuthorService,
    private authorFormService: AuthorFormService
  ) {
    this.authorForm = this.authorFormService.toFormGroup();
  }

  ngOnInit() {
    this.loadAuthorList();
  }

  loadAuthorList() {
    this.authorService.list().subscribe({
      next: (authorList) => {
        this.authorList = authorList;
      },
      error: (error) => {
        console.error("error load list!!");
      },
    });
  }

  loadAuthor(id: any) {
    this.authorService.load(id).subscribe({
      next: (author) => {
        this.authorForm.patchValue(author);
        this.selectedAuthor = author;
      },
    });
  }

  showModal(author?: any) {
    if (author) {
      this.loadAuthor(author.id);
    }
    this.isShowModal = true;
  }

  hideModal() {
    this.isShowModal = false;
    this.selectedAuthor = null
    this.authorForm.reset();
  }

  onSubmit() {
    if (!this.selectedAuthor) {
      this.createAuthor();
    } else {
      this.editAuthor();
    }
  }

  createAuthor() {
    this.authorService.create(this.authorForm.value).subscribe({
      next: (result) => {
        alert("create: " + JSON.stringify(result));
        this.hideModal();
        this.loadAuthorList();
      },
    });
  }

  editAuthor() {
    this.authorService
      .update(this.selectedAuthor.id, this.authorForm.value)
      .subscribe({
        next: (result) => {
          alert(
            "edit id: " + this.selectedAuthor.id + " " + JSON.stringify(result)
          );
          this.hideModal();
          this.loadAuthorList();
        },
      });
  }

  deleteAuthor() {
    this.authorService.delete(this.selectedAuthor.id).subscribe({
      next: (result) => {
        alert(`delete author id ${result.id} success !!`);
        this.hideModal();
        this.loadAuthorList();
      },
    });
  }
}

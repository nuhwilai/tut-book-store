import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-crud',
  templateUrl: './author-crud.component.html',
  styleUrls: ['./author-crud.component.css']
})
export class AuthorCrudComponent implements OnInit {

  isShowModal: boolean = false

  constructor() { }

  ngOnInit() {
  }

  showModal() {
    this.isShowModal = true;
  }

  hideModal() {
    this.isShowModal = false;
  }

}

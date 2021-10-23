import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list() {
    return this.httpClient.get("http://localhost:3000/api/books")
      .pipe(
        map((result: any) => {
          console.log(result)
          return result.data
        }
        )
      )
  }

  load(id: number) {
    return of({ id: 1, name: "Harry Potter 1", price: 100, page: 20 })
  }

  create(data: any) {
    return of({ id: 5, name: "Harry Potter 4", price: 400, page: 50 })
  }

  update(id: number, data: any) {
    return of({ id: 1, name: "Harry Potter 1", price: 100, page: 20 })
  }

  delete(id: number) {
    return of({
      id: 1
    })
  }

}

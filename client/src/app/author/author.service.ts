import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list() {
    return this.httpClient.get(environment.serverApiUrl + "/authors").pipe(this.mapHandler())
  }

  load(id: number) {
    return this.httpClient.get(environment.serverApiUrl + "/authors/" + id).pipe(this.mapHandler())
  }

  create(data: any) {
    return this.httpClient.post(environment.serverApiUrl + "/authors", data).pipe(this.mapHandler())
  }

  update(id: number, data: any) {
    return this.httpClient.put(environment.serverApiUrl + "/authors/" + id, data).pipe(this.mapHandler())
  }

  delete(id: number) {
    return this.httpClient.delete(environment.serverApiUrl + "/authors/" + id).pipe(this.mapHandler())
  }

  private mapHandler() {
    return map((result: any) => result.data)
  }

}

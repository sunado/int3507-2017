import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  create(name: string, email: string) {
    return this.http.post('/api/create_user', JSON.stringify({ name: name, email: email }))
      .map((response: Response) => response.json());
  }

  listUser() {
    return this.http.get('/api/users', this.jwt())
      .map((response: Response) => response.json());
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        let headers = new Headers({ 'x-access-token': currentUser.token });
        return new RequestOptions({ headers: headers });
    }
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from './../components/post/post';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FetchPostsService {
private postsURI = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) { }
  
  getPosts() {
    return this.http.get(this.postsURI)
      .toPromise()
      .then(response => response.json());
    
  }
}

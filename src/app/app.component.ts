import { Component } from '@angular/core';
import { Post } from './components/post/post';
import { FetchPostsService } from './services/fetch-posts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  posts: Post[];
  
  constructor(private fetchPostService: FetchPostsService){
   this.fetchPostService.getPosts()
   .then(allPosts =>{
     this.posts = allPosts;
     console.log(allPosts);
   })
  }
}

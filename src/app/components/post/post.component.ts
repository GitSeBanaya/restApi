import { Component, Input } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() inPost: Post;

  showIt = false;
  caretDirection="dropdown";

  constructor() {
  }

  ngOnInit() {
  }

  doShow(){
    this.showIt = !this.showIt;
    this.caretDirection = (this.caretDirection == "dropdown") ? "dropup" : "dropdown";
  }

}

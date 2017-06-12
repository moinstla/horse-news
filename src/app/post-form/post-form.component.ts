import { Component, Output, EventEmitter  } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() newPostSender = new EventEmitter();

  constructor() { }

  submitForm(
    name: string,
    content: string,
    image: string){
      let newPost: Post = new Post(name, content, image, "");
      this.newPostSender.emit(newPost);
    }
}

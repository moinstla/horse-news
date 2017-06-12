import { Component, Output, EventEmitter  } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() newPostSender = new EventEmitter();

  constructor(private postService: PostService) { }

  submitForm(
    name: string,
    content: string,
    image: string){
      let newPost: Post = new Post(name, content, image, "", this.nextId());
      this.newPostSender.emit(newPost);
    }

    //generates new id
  nextId(){
    let idCount = 0;
    this.postService.getPosts().forEach(function(post){
      if(post.id > idCount) {
        idCount = post.id
      }
    });

    return idCount + 1;
  }
}

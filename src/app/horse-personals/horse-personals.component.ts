import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-horse-personals',
  templateUrl: './horse-personals.component.html',
  styleUrls: ['./horse-personals.component.css'],
  providers: [PostService]
})
export class HorsePersonalsComponent implements OnInit {
  posts: Post[];

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    let workingPosts = this.postService.getPosts();
    let tempPosts = [];
    workingPosts.forEach((post) => {
      if(post.category === "horse-personals") {
        tempPosts.push(post);
      }
    });
    this.posts = tempPosts;
  }

  newPost(post) {
    post.category = "horse-personals";
    this.posts.push(post);
  }

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  };


}

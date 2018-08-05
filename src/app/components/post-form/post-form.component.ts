import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input
} from '@angular/core';

import Post from "../../models/Post";
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost (title: string, body: string) {
    if (!title || !body) {
      alert('Заполните все поля!');
    } else {
      this.postService.savePost({title, body} as Post).subscribe(post => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    console.log(123);
  }

}

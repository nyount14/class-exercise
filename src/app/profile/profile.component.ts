import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/shared/Post.model';
import { PostsService } from '../posts.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  postSub: Subscription;

  posts: Post[] = [];

  showForm = false;

  content: string = "";
  author = 'Username';
  postsService: any;
  Array: Post[] = []

  constructor(private profileService: ProfileService, private postService: PostsService) {
    this.postSub = profileService.post$.subscribe(
      (posts)=>{
        this.posts = posts;
      }
    );
  }

  ngOnInit(): void {
    this.Array = this.postService.testArray

    // get the testarray from postservice and store that in a class property
    // so that i can use ngfor
  }
  onSubmit(){
    this.profileService.addPost(new Post(this.author, this.content));
    // this.postService.storedata(this.author,this.content)
    this.content = ""
    this.showForm = false;
  }

  onRetrieve(){
    this.postsService.getData(this.author, this.content);
  }
}

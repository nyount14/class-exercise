import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExploreService } from './explore/explore.service';
import { Post } from './shared/Post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(
    private http: HttpClient,
    private exploreService: ExploreService
  ) {}

  public testArray: Post[] = [];


  storedata(author: string, content: string) {
    // this.exploreService.posts
    // posts = [
    //   {id: 1, author: 'John B.', content: 'Can\'t wait to travel to Paris!'},
    //   {id: 2, author: 'Kelly F.', content: 'Does anyone know a good sushi place near Camp Washington?'},
    //   {id: 3, author: 'James L.', content: 'When life gives you lemons, say no thanks.'},
    //   {id: 4, author: 'Carrie W.', content: 'Shooting the Breeze'},
    //   {id: 5, author: 'Martin G.', content: 'Local Community Good Stuff'}
    // ];

    // this.http.put('https://authentication-project-23c05-default-rtdb.firebaseio.com/posts.json',data)
    // .subscribe(response => {
    //   console.log(response)}
    //   );

    const data: Post = new Post(author, content);
    this.http
      .post<Post>(
        'https://authentication-project-23c05-default-rtdb.firebaseio.com/posts.json',
        data
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  getData() {
    this.http
      .get<Post>(
        'https://authentication-project-23c05-default-rtdb.firebaseio.com/posts.json'
      )
      .subscribe((response) => {
        const array: Post[] = [];
        for (const key in response) {
          console.log(response);
          array.push(response);
        }
        this.testArray = array
      });
  }
}

function retrievedata() {
  throw new Error('Function not implemented.');
}
// this.http.post<Post>

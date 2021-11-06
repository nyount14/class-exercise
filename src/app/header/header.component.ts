import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show = false;
  content: string = "";
  author = 'Username';

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }
  toggleShow(){
    this.show = !this.show;
  }

  onSave(){
    this.postsService.storedata(this.author, this.content);
  }

  onGet(){
    this.postsService.getData();
  }
}


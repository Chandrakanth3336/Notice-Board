import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  posts: Post[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService) {
    
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.startTimer();
    this.changeGreetins();
    this.postService.getAll().subscribe((data) => {
      this.posts = data;
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id: number) {
    const confirm = window.confirm(
      'Are you sure you want to delete this post?'
    );
    if (confirm) {
      this.postService.delete(id).subscribe((res) => {
        this.posts = this.posts.filter((item) => item.id !== id);

        alert('Post deleted successfully!');
      });
    } else {
      alert('Post Deletion Failed');
    }
  }

public runningTime:string='';
public greetings:string='';

startTimer(){
  let navbarTimer=0;
  setInterval(() => {
    navbarTimer++;
    this.updateTime(navbarTimer);
  },1000);
}

updateTime(seconds:number){
    let minutes = this.timeFormat(Math.floor(seconds/60));
    let secon = this.timeFormat(seconds%60);
    this.runningTime= minutes +':'+ secon
}

timeFormat(unit:number):string{
  return unit < 10 ? '0'+ unit : unit.toString();
}
changeGreetins(){
  const hours = new Date().getHours();

  if(hours>0 && hours<12){
      this.greetings = 'Good Morning'
  }
  else if(hours>=12 && hours<18){
    this.greetings = 'Good Afternoon'
  }
  else{
    this.greetings = 'Good Evening'
  }
}

}

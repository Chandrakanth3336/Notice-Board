import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
    
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  id!: number;
  post!: Post;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    // this.id = +this.route.snapshot.params['id'];
        this.route.params.subscribe((data:any)=>{
          this.id=data.id;
        
    this.postService.find(data.id).subscribe(
      (data: Post)=>{
       this.post=data;
    },
    (error)=>{
      console.log("Error Fetching post",error);
    });
  });

  }  
}
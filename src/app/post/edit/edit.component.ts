import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
      
  id!: number;
  post!: Post;
  form!: FormGroup;
    
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
    // console.log('4');
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });

    // this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        
        this.postService.find(data.id).subscribe((data: Post)=>{
          this.post = data;
          this.post.title=this.post.title.toUpperCase();
          this.form.patchValue({
            title:this.post.title,
            body:this.post.body
          });
        });
      })
   
      
   
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    // console.log('5');
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */

  submit(){
    if(this.id){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
        //  this.form.patchValue({
        //   title:res.title,
        //   body:res.body
        //  })
         this.router.navigateByUrl('post/index');
        //  console.log('6');
    })
  }
}
   
}
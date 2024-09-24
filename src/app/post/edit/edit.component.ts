import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/unsaved-data.guard';
     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit , CanComponentDeactivate  {

  public isFormDirty:boolean=false;


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
      });

      this.form.valueChanges.subscribe(()=>{
        this.isFormDirty=true
  })
  }

 canDeactivate(): boolean{
  if(this.isFormDirty){
    return window.confirm("form has unsaved Changes. Do you really want to go back?");
  }
  else{
    return true;
  }
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
    this.isFormDirty=false;
    if(this.id){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('post/index');
    });
  }
}
   
}
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/unsaved-data.guard';
     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit , CanComponentDeactivate{


    public isFormDirty:boolean=false;



  form!: FormGroup;
  fetchInitialData: any;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    // console.log('1');
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    });

    this.form.valueChanges.subscribe(()=>{
      this.isFormDirty=true;
    })
    } 

    canDeactivate():boolean{
      if(this.isFormDirty){
        const confirmation=window.confirm("Your Form has Unsaved Changes. Do You reallu Want to Go back?");
        return confirmation;
        if(confirmation){
          return true;
        }
        else{
          return false;
        }
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
    // console.log('2');
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    this.isFormDirty=false
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('post/index');
        //  console.log('3');
    })
  } 
}
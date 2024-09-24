import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "http://localhost:3000/api/posts";

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }

  // Fetch all posts
  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiURL)
      .pipe(catchError(this.errorHandler));
  }

  // Create a new post
  create(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.apiURL, post, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  // Find a post by ID
  find(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.apiURL+ '/' +id)
      .pipe(catchError(this.errorHandler));
  }

  // Update a post
  update(id: number, post: Post): Observable<Post> {
    return this.httpClient.put<Post>(this.apiURL+ '/' +id, post, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  } 

  // Delete a post
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiURL+ '/' +id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  // Error handler
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

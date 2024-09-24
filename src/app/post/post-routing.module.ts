import { createComponent, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { UnsavedDataGuard } from '../unsaved-data.guard';

  
const routes: Routes = [
  { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
  { path: 'post/index', component: IndexComponent },
  { path: 'post/:id/view', component: ViewComponent },
  { path: 'post/create', component: CreateComponent, canDeactivate:[UnsavedDataGuard]},
  { path: 'post/:id/edit', component:  EditComponent,canDeactivate:[UnsavedDataGuard]}
  
  
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
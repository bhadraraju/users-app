import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [
  { path: '',   redirectTo: 'userlist', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'userlist', component: UserlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

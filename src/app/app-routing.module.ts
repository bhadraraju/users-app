import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import {NewsComponent} from "./news/news.component";


const routes: Routes = [
  { path: '',   redirectTo: 'userlist', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'news', component: NewsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PendingverificationComponent } from './modules/pendingverification/pendingverification.component';
import { PostsComponent } from './modules/posts/posts.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { CalendarComponent } from './modules/calendar/calendar.component';
import { LeadsComponent } from './modules/leads/leads.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path: 'posts',
      component: PostsComponent
    }, {
      path: 'articles',
      component: ArticlesComponent
    }, {
      path: 'pendingverification',
      component: PendingverificationComponent
    }, {
      path: 'calendar',
      component: CalendarComponent
    }, {
      path: 'leads',
      component: LeadsComponent
    }],
    canActivate: [AuthGuardService]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

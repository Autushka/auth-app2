import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {TaskListComponent} from "./task-list/task-list.component";

@NgModule({
   imports: [
      RouterModule.forRoot([
         {
            path: '',
            redirectTo: '/login',
            pathMatch: 'full'
         },
         {
            path: 'login',
            component: LoginComponent
         },
         {
            path: 'task-list',
            component: TaskListComponent
         },
         {
            path: '**',
            redirectTo: '/login',
            pathMatch: 'full'
         }
      ])
   ],
   providers: [],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from "@angular/material";
// hammerjs is needed for the angular-material components that rely on gesture handling by hammerjs
import 'hammerjs';
import {FlexLayoutModule} from "@angular/flex-layout";
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from "./app-routing";
import {TaskListComponent} from './task-list/task-list.component';

import {PerfectScrollbarModule} from 'angular2-perfect-scrollbar';
import {Ng2PageScrollModule} from 'ng2-page-scroll/ng2-page-scroll';

import {TasksService} from "./task-list/tasks.service";
import { TaskListItemComponent } from './task-list/task-list-item/task-list-item.component';
import { TaskDetailsComponent } from './task-list/task-details/task-details.component';
import {CoreService} from "./core.service";

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      TaskListComponent,
      TaskListItemComponent,
      TaskDetailsComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      MaterialModule,
      FlexLayoutModule,
      AppRoutingModule,
      PerfectScrollbarModule,
      Ng2PageScrollModule.forRoot()
   ],
   providers: [TasksService, CoreService],
   bootstrap: [AppComponent]
})
export class AppModule {
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";
import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "./app-routing";
import { TaskListComponent } from './task-list/task-list.component';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { Ng2PageScrollModule } from 'ng2-page-scroll/ng2-page-scroll';
import { TasksService } from "./task-list/tasks.service";
import { TaskListItemComponent } from './task-list/task-list-item/task-list-item.component';
import { TaskDetailsComponent } from './task-list/task-details/task-details.component';
import { CoreService } from "./core.service";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Projects/authApp2/auth-app2/src/app/app.module.js.map
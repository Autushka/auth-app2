var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from "@angular/forms/src/facade/async";
import { TasksService } from "../tasks.service";
export var TaskDetailsComponent = (function () {
    function TaskDetailsComponent(tasksService) {
        this.onTaskDetailsCancel = new EventEmitter();
        this.onTaskDetailsSubmit = new EventEmitter();
        this.statuses = [];
        this.tasksService = tasksService;
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
        this.statuses = this.tasksService.getStatuses();
    };
    TaskDetailsComponent.prototype.onCancel = function () {
        this.onTaskDetailsCancel.emit();
    };
    TaskDetailsComponent.prototype.onSubmit = function () {
        this.onTaskDetailsSubmit.emit();
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], TaskDetailsComponent.prototype, "taskDetails", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], TaskDetailsComponent.prototype, "isAddNewTaskMode", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], TaskDetailsComponent.prototype, "onTaskDetailsCancel", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], TaskDetailsComponent.prototype, "onTaskDetailsSubmit", void 0);
    TaskDetailsComponent = __decorate([
        Component({
            selector: 'app-task-details',
            templateUrl: './task-details.component.html',
            styleUrls: ['./task-details.component.css']
        }), 
        __metadata('design:paramtypes', [TasksService])
    ], TaskDetailsComponent);
    return TaskDetailsComponent;
}());
//# sourceMappingURL=C:/Projects/authApp2/auth-app2/src/app/task-list/task-details/task-details.component.js.map
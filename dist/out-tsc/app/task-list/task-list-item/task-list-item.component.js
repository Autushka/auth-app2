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
export var TaskListItemComponent = (function () {
    function TaskListItemComponent() {
        this.onTaskListItemSelected = new EventEmitter();
    }
    TaskListItemComponent.prototype.ngOnInit = function () {
    };
    TaskListItemComponent.prototype.selectTaskListItem = function () {
        this.onTaskListItemSelected.emit(this.taskListItem);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], TaskListItemComponent.prototype, "taskListItemHeight", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], TaskListItemComponent.prototype, "taskListItem", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TaskListItemComponent.prototype, "taskListItemId", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], TaskListItemComponent.prototype, "onTaskListItemSelected", void 0);
    TaskListItemComponent = __decorate([
        Component({
            selector: 'app-task-list-item',
            templateUrl: './task-list-item.component.html',
            styleUrls: ['./task-list-item.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TaskListItemComponent);
    return TaskListItemComponent;
}());
//# sourceMappingURL=C:/Projects/authApp2/auth-app2/src/app/task-list/task-list-item/task-list-item.component.js.map
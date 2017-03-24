var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, NgZone, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import { TasksService } from "./tasks.service";
import { PageScrollService, PageScrollInstance, PageScrollConfig } from "ng2-page-scroll";
import { Observable } from "rxjs";
import { DOCUMENT } from "@angular/platform-browser";
import { CoreService } from "../core.service";
export var TaskListComponent = (function () {
    function TaskListComponent(tasksService, coreService, ngZone, pageScrollService, document) {
        var _this = this;
        this.ngZone = ngZone;
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.listItemVerticalPadding = 20;
        this.tasks = [];
        PageScrollConfig.defaultDuration = 50;
        this.tasksService = tasksService;
        this.coreService = coreService;
        window.onresize = function (e) {
            //ngZone.run will help to run change detection
            _this.ngZone.run(function () {
                _this.calculateListItemHeight();
            });
        };
    }
    TaskListComponent.prototype.onAfterListScroll = function (event) {
        var _this = this;
        if (!this.test) {
            alert("yo");
            this.test = true;
        }
        if (this.scrollSubscribe) {
            this.scrollSubscribe.unsubscribe();
        }
        this.scrollTimer = Observable.timer(100);
        this.scrollSubscribe = this.scrollTimer.subscribe(function () {
            _this.scrollToClosestTask(parseInt(event.target.childNodes[2].style.top));
        });
    };
    TaskListComponent.prototype.scrollToClosestTask = function (scrollTopValue) {
        var scrollingView = this.document.getElementById('taskList');
        var scrollToItemId = '#task' + Math.floor(scrollTopValue / (this.listItemHeight + this.listItemVerticalPadding));
        var pageScrollInstance = PageScrollInstance.newInstance({
            document: this.document,
            scrollTarget: scrollToItemId,
            scrollingViews: [scrollingView]
        });
        this.pageScrollService.start(pageScrollInstance);
    };
    ;
    TaskListComponent.prototype.ngOnInit = function () {
        this.isListHiddenForMobile = false;
        this.tasks = this.tasksService.getTasks();
        this.selectedTask = _.cloneDeep(_.find(this.tasks, { isSelected: true }));
        if (!this.tasks.length) {
            this.switchToAddNewTaskMode();
        }
    };
    TaskListComponent.prototype.ngAfterViewInit = function () {
        this.calculateListItemHeight();
    };
    TaskListComponent.prototype.calculateListItemHeight = function () {
        var body = document.body;
        var html = document.documentElement;
        var initialItemHeight;
        var tooltipHeight;
        var documentHeight = Math.max(body.offsetHeight, html.clientHeight, html.offsetHeight);
        var toolBarHeight = document.getElementById('listToolBar').clientHeight;
        document.getElementById("taskList").style.height = (documentHeight - toolBarHeight) + 'px';
        initialItemHeight = (documentHeight - toolBarHeight) / 4 - this.listItemVerticalPadding; // (documentHeight - toolBarHeight) / number of list items per view - item padding
        if (documentHeight < 568) {
            initialItemHeight = (documentHeight - toolBarHeight) / 3 - this.listItemVerticalPadding;
        }
        this.listItemHeight = initialItemHeight; // (documentHeight - toolBarHeight) / number of list items per view - item padding
    };
    TaskListComponent.prototype.viewDetailsForMobile = function () {
        this.isListHiddenForMobile = true;
    };
    TaskListComponent.prototype.backToListForMobile = function () {
        this.isListHiddenForMobile = false;
    };
    TaskListComponent.prototype.onTaskListItemSelected = function (task) {
        this.isAddNewTaskMode = false;
        this.selectedTask = this.tasksService.setSelectedTask(task);
        this.viewDetailsForMobile();
    };
    TaskListComponent.prototype.switchToAddNewTaskMode = function () {
        this.isAddNewTaskMode = true;
        this.selectedTask = { header: '', details: '' };
    };
    TaskListComponent.prototype.onAddNewTask = function () {
        this.switchToAddNewTaskMode();
        this.viewDetailsForMobile();
    };
    TaskListComponent.prototype.onTaskDetailsCancel = function () {
        this.isAddNewTaskMode = false;
        this.selectedTask = _.cloneDeep(_.find(this.tasks, { isSelected: true }));
        if (!this.selectedTask) {
            this.switchToAddNewTaskMode();
        }
        this.backToListForMobile();
    };
    TaskListComponent.prototype.onTaskDetailsSubmit = function () {
        if (this.isAddNewTaskMode) {
            this.tasksService.createTask(this.selectedTask);
            this.selectedTask = this.tasksService.getSelectedTask();
            this.isAddNewTaskMode = false;
        }
        else {
            this.tasksService.updateTask(this.selectedTask);
        }
        this.backToListForMobile();
    };
    __decorate([
        ViewChild('taskList'), 
        __metadata('design:type', ElementRef)
    ], TaskListComponent.prototype, "taskList", void 0);
    __decorate([
        HostListener('ps-scroll-y', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TaskListComponent.prototype, "onAfterListScroll", null);
    TaskListComponent = __decorate([
        Component({
            selector: 'app-task-list',
            templateUrl: './task-list.component.html',
            styleUrls: ['./task-list.component.css']
        }),
        __param(4, Inject(DOCUMENT)), 
        __metadata('design:paramtypes', [TasksService, CoreService, NgZone, PageScrollService, Object])
    ], TaskListComponent);
    return TaskListComponent;
}());
//# sourceMappingURL=C:/Projects/authApp2/auth-app2/src/app/task-list/task-list.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { CoreService } from "../core.service";
export var TasksService = (function () {
    function TasksService(coreService) {
        this.coreService = coreService;
    }
    TasksService.prototype.getTasks = function () {
        this.tasks = [];
        // tasks.push({
        //    type: 'Task',
        //    guid: '1',
        //    header: 'Prepare papers for MS position',
        //    details: "Prepare answer for the papers and form request.",
        //    points: 3,
        //    status: 'Closed',
        //    createdAt: 'March 12, 2017',
        //    createdBy: 'Aleh Autushka',
        //    isSelected: true
        // });
        //
        // tasks.push({
        //    type: 'Task',
        //    guid: '2',
        //    header: 'Call NBC regarding municipal taxes',
        //    details: "Check how to move from bell to ebox",
        //    points: 3,
        //    status: 'Closed',
        //    createdAt: 'March 12, 2017',
        //    createdBy: 'Aleh Autushka',
        //    isSelected: false
        // });
        //
        // tasks.push({
        //    type: 'Task',
        //    guid: '3',
        //    header: 'Move agreement list call to the abstract view',
        //    details: "Move agreement list call to the abstract view, remove current calls.",
        //    points: 3,
        //    status: 'Closed',
        //    createdAt: 'March 12, 2017',
        //    createdBy: 'Aleh Autushka',
        //    isSelected: false
        // });
        //
        // tasks.push({
        //    type: 'Task',
        //    guid: '4',
        //    header: 'Implement redirection logic based on agreement list call results',
        //    details: "Implement redirection logic based on agreement list call results",
        //    points: 5,
        //    status: 'Closed',
        //    createdAt: 'March 12, 2017',
        //    createdBy: 'Aleh Autushka',
        //    isSelected: false
        // });
        //
        // tasks.push({
        //    type: 'Task',
        //    guid: '5',
        //    header: 'Check ebox internet',
        //    details: "Check how to move from bell to ebox",
        //    points: 3,
        //    status: 'Open',
        //    createdAt: 'March 12, 2017',
        //    createdBy: 'Aleh Autushka',
        //    isSelected: false
        // });
        //
        // tasks.push({
        //    type: 'Task',
        //    guid: '6',
        //    header: 'Follow up with NBC regarding municipal taxes (email sent)',
        //    details: "Follow up email sent to johanne.picard@bnc.ca regarding municipal taxes for 2017",
        //    points: 1,
        //    status: 'Open',
        //    createdAt: 'March 12, 2017',
        //    createdBy: 'Aleh Autushka',
        //    isSelected: false
        // });
        return this.tasks;
    };
    TasksService.prototype.setSelectedTask = function (task) {
        var previousSelectedTask = _.find(this.tasks, { isSelected: true });
        var newSelectedTask = _.find(this.tasks, { guid: task.guid });
        if (previousSelectedTask) {
            previousSelectedTask.isSelected = false;
        }
        newSelectedTask.isSelected = true;
        return _.cloneDeep(newSelectedTask);
    };
    TasksService.prototype.getSelectedTask = function () {
        var currentSelectedTask = _.find(this.tasks, { isSelected: true });
        return _.cloneDeep(currentSelectedTask);
    };
    TasksService.prototype.createTask = function (task) {
        var taskToAdd = _.cloneDeep(task);
        taskToAdd.guid = this.coreService.generateGuid();
        taskToAdd.createdAt = (new Date()).getTime();
        taskToAdd.createdBy = 'Aleh Autushka';
        this.tasks.push(taskToAdd);
        this.setSelectedTask(taskToAdd);
    };
    TasksService.prototype.updateTask = function (task) {
        var taskIndex = _.indexOf(this.tasks, _.find(this.tasks, { guid: task.guid }));
        this.tasks[taskIndex] = _.cloneDeep(task);
    };
    TasksService.prototype.getStatuses = function () {
        var statuses = [];
        statuses.push({ guid: '0', description: 'Open' });
        statuses.push({ guid: '1', description: 'In Progress' });
        statuses.push({ guid: '2', description: 'Closed' });
        return statuses;
    };
    TasksService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [CoreService])
    ], TasksService);
    return TasksService;
}());
//# sourceMappingURL=C:/Projects/authApp2/auth-app2/src/app/task-list/tasks.service.js.map
import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from "@angular/forms/src/facade/async";
import {TasksService} from "../tasks.service";

declare var _: any;

@Component({
   selector: 'app-task-details',
   templateUrl: './task-details.component.html',
   styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
   @Input() taskDetails: any;
   @Input() isAddNewTaskMode: Boolean;
   @Output() onTaskDetailsCancel = new EventEmitter();
   @Output() onTaskDetailsSubmit = new EventEmitter();

   statuses: any = [];
   tasksService: any;

   constructor(tasksService: TasksService) {
      this.tasksService = tasksService;
   }

   ngOnInit() {
      this.statuses = this.tasksService.getStatuses();
   }

   onCancel() {
      this.onTaskDetailsCancel.emit();
   }

   onSubmit() {
      this.onTaskDetailsSubmit.emit();
   }
}

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
   selector: 'app-task-list-item',
   templateUrl: './task-list-item.component.html',
   styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
   @Input() taskListItemHeight: number;
   @Input() taskListItem: any;
   @Input() taskListItemId: string;
   @Output() onTaskListItemSelected = new EventEmitter();

   constructor() {
   }

   ngOnInit() {
   }

   selectTaskListItem() {
      this.onTaskListItemSelected.emit(this.taskListItem);
   }
}

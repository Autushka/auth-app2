import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable, Subscription} from "rxjs";

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
  eventDelay: Observable<number>;
  eventDelaySubscribe: Subscription;

  constructor() {
  }

  ngOnInit() {
  }

  selectTaskListItem() {
    this.eventDelay = Observable.timer(500);
    this.eventDelaySubscribe = this.eventDelay.subscribe(() => {
      this.onTaskListItemSelected.emit(this.taskListItem);
    });
  }
}

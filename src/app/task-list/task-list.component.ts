import {Component, OnInit, NgZone, HostListener, Inject, ViewChild, ElementRef} from '@angular/core';
import {TasksService} from "./tasks.service";
import {PageScrollService, PageScrollInstance, PageScrollConfig} from "ng2-page-scroll";
import {Observable, Subscription} from "rxjs";
import {DOCUMENT} from "@angular/platform-browser";
import {CoreService} from "../core.service";

declare var _: any;

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @ViewChild('taskList')
  private taskList: ElementRef;

  isListHiddenForMobile: boolean; //flag to identify whether list of details part of the screen is displayed for mobile devices
  isAddNewTaskMode: boolean;
  listItemHeight: number;
  listItemVerticalPadding: number = 20;

  tasksService: TasksService;
  coreService: CoreService;
  tasks = [];
  selectedTask: any;
  selectedTaskCopy: any;
  scrollTimer: Observable<number>;
  scrollSubscribe: Subscription;

  constructor(tasksService: TasksService, coreService: CoreService, private ngZone: NgZone, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
    PageScrollConfig.defaultDuration = 50;
    PageScrollConfig.defaultScrollOffset = 64;

    this.tasksService = tasksService;
    this.coreService = coreService;

    window.onresize = (e) => {
      //ngZone.run will help to run change detection
      this.ngZone.run(() => {
        this.calculateListItemHeight();
      });
    };
  }

  onAfterListScroll(event) {
    // if (this.scrollSubscribe) {
    //   this.scrollSubscribe.unsubscribe();
    // }
    //
    // this.scrollTimer = Observable.timer(100);
    // this.scrollSubscribe = this.scrollTimer.subscribe(() => {
    //   this.scrollToClosestTask(event.target.scrollTop);
    // });
  }

  scrollToClosestTask(scrollTopValue: number): void {
    // let scrollingView = this.document.getElementById('taskList');
    // let scrollToItemId = '#task' + Math.floor(scrollTopValue / (this.listItemHeight + this.listItemVerticalPadding));
    // let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
    //   document: this.document,
    //   scrollTarget: scrollToItemId,
    //   scrollingViews: [scrollingView]
    // });
    //
    // this.pageScrollService.start(pageScrollInstance);
  };

  ngOnInit() {
    this.isListHiddenForMobile = false;
    this.tasks = this.tasksService.getTasks();
    this.selectedTask = _.cloneDeep(_.find(this.tasks, {isSelected: true}));

    if (!this.tasks.length) {
      this.switchToAddNewTaskMode();
    }
  }

  ngAfterViewInit() {
    this.calculateListItemHeight();
  }

  calculateListItemHeight() {
    let body = document.body;
    let html = document.documentElement;
    let initialItemHeight;
    let tooltipHeight;
    let documentHeight = Math.max(body.offsetHeight, html.clientHeight, html.offsetHeight);
    let toolBarHeight = document.getElementById('listToolBar').clientHeight;

    document.getElementById("taskList").style.height = (documentHeight - toolBarHeight) + 'px';

    initialItemHeight = (documentHeight - toolBarHeight) / 4 - this.listItemVerticalPadding; // (documentHeight - toolBarHeight) / number of list items per view - item padding

    if (documentHeight < 568) { // iphone 5 screen height
      initialItemHeight = (documentHeight - toolBarHeight) / 3 - this.listItemVerticalPadding;
    }

    this.listItemHeight = initialItemHeight; // (documentHeight - toolBarHeight) / number of list items per view - item padding
  }

  viewDetailsForMobile() {
    this.isListHiddenForMobile = true;
  }

  backToListForMobile() {
    this.isListHiddenForMobile = false;
  }

  onTaskListItemSelected(task) {
    this.isAddNewTaskMode = false;
    this.selectedTask = this.tasksService.setSelectedTask(task);
    this.viewDetailsForMobile();
  }

  switchToAddNewTaskMode() {
    this.isAddNewTaskMode = true;
    this.selectedTask = {header: '', details: ''};
  }

  onAddNewTask() {
    debugger;
    this.switchToAddNewTaskMode();
    this.viewDetailsForMobile();
  }

  onDeleteSelectedTask() {
    this.tasksService.deleteSelectedTask(this.selectedTask);
  }

  onTaskDetailsCancel() {
    this.isAddNewTaskMode = false;
    this.selectedTask = _.cloneDeep(_.find(this.tasks, {isSelected: true}));
    if (!this.selectedTask) {
      this.switchToAddNewTaskMode();
    }
    this.backToListForMobile();
  }

  onTaskDetailsSubmit() {
    if (this.isAddNewTaskMode) {
      this.tasksService.createTask(this.selectedTask);
      this.selectedTask = this.tasksService.getSelectedTask();
      this.isAddNewTaskMode = false;
    }
    else {
      this.tasksService.updateTask(this.selectedTask);
    }
    this.backToListForMobile();
  }
}

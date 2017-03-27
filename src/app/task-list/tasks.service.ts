import {Injectable} from '@angular/core';
import {CoreService} from "../core.service";

declare var _: any;

@Injectable()
export class TasksService {
   coreService: CoreService;
   tasks: any;

   constructor(coreService: CoreService) {
      this.coreService = coreService;
   }

   getTasks() {
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
   }

   setSelectedTask(task) {
      let previousSelectedTask = _.find(this.tasks, {isSelected: true});
      let newSelectedTask = _.find(this.tasks, {guid: task.guid});

      if (previousSelectedTask) {
         previousSelectedTask.isSelected = false;
      }

      newSelectedTask.isSelected = true;

      return _.cloneDeep(newSelectedTask);
   }

   getSelectedTask(){
      let currentSelectedTask = _.find(this.tasks, {isSelected: true});
      return _.cloneDeep(currentSelectedTask);
   }

   createTask(task) {
      let taskToAdd = _.cloneDeep(task)

      taskToAdd.guid = this.coreService.generateGuid();
      taskToAdd.createdAt = (new Date()).getTime();
      taskToAdd.createdBy = 'Aleh Autushka';
      this.tasks.push(taskToAdd);

      this.setSelectedTask(taskToAdd);
   }

   updateTask(task) {
      let taskIndex = _.indexOf(this.tasks, _.find(this.tasks, {guid: task.guid}));
      this.tasks[taskIndex] = _.cloneDeep(task);
   }

   getStatuses() {
      let statuses = [];
      statuses.push({guid: '0', description: 'Open'});
      statuses.push({guid: '1', description: 'In Progress'});
      statuses.push({guid: '2', description: 'Closed'});

      return statuses;
   }
}

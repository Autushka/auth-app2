import {Injectable} from '@angular/core';

declare var _: any;

@Injectable()
export class TasksService {
   tasks: any;


   constructor() {
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

   createTask(task){
      task.createdAt = (new Date()).getTime();
      task.createdBy = 'Aleh Autushka';
      this.tasks.push(_.cloneDeep(task));
   }

   updateTask(task){
      let updatedTask = _.find(this.tasks, {guid: task.guid});

      updatedTask = _.cloneDeep(task);
   }

   getStatuses(){
      let statuses = [];
      statuses.push({guid: '0', description: 'Open'});
      statuses.push({guid: '1', description: 'In Progress'});
      statuses.push({guid: '2', description: 'Closed'});

      return statuses;
   }
}

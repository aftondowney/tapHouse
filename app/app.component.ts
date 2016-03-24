
import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
       <h1>To-Do List</h1>
       <task-list [taskList]="tasks"
       (onTaskSelect)="taskWasSelected($event)">
       </task-list>
     <div>
  `
})

export class AppComponent {
  public kegs: Kegs[];
  constructor(){
    this.kegs = [];
  }
  taskWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}

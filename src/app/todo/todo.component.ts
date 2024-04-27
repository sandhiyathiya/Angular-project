import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasklist: any[] = [];
  task: string = '';

  constructor() {}

  ngOnInit(): void {}

  addtask() {
     this.tasklist.push(this.task);
      this.task = ''; 
    }

  remove(index: number) {
    if (index > -1) {
      this.tasklist.splice(index, 1);
    }
  }
}

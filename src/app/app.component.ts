import { DataService } from './data.service';
import {Headers, RequestOptions,  Http} from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = "What needs to be done?";

  todos : any[] = [];
  todo : string = "";

   constructor(public dataService: DataService){

   }

   ngOnInit(){
      this.dataService.getTodos().subscribe(value => {
        this.todos = value;
      })
   }

  submitTodo = function(){
    this.todos.push({
       value: this.todo,
       done: false
     });
    this.todo = "";
  }

  clearCompletedEvent(){
    this.todos = this.todos.filter(a => !a.done);
  }

  btnDelete(todo){
    let idx = this.todos.indexOf(todo);
    this.todos.splice(idx, 1);

    this.todos = [...this.todos];
  }

  btnSelectAll(status : Boolean) {
    this.todos.map(a => {
      a.done = status
      return a;
    });
  }

  save() {

    
  }
}

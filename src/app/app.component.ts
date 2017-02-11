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

   constructor(private http: Http){

   }

   ngOnInit(){
    let headers = new Headers({
      "content-Type" : "application/json",
      "Authorization" : "token 36e9dd50-3012-4300-9af4-4c0ba6b8230b"
    });

    let options = new RequestOptions({
      headers : headers
    });

    this.http.get("/me/todomvc", options).subscribe(res =>  {
      console.log(res);
      this.todos = res.json();
    });
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

    let headers = new Headers({
      "content-Type" : "application/json",
      "Authorization" : "token 36e9dd50-3012-4300-9af4-4c0ba6b8230b"
    });

    let options = new RequestOptions({
      headers : headers
    });

    this.http.post("/me/todomvc", this.todos, options).subscribe();
  }
}

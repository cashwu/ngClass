import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = "What needs to be done?";

  todos : any[] = [];

  submitTodo = function(newTodo : HTMLInputElement ){
    this.todos.push(newTodo.value);
    newTodo.value = "";
  }
}

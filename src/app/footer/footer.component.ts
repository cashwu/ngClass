import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  filterType : string = "All";

  @Input() 
  todos: any[];
  
  @Output() 
  clearCompleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

 get todoLength() {
    return this.todos.filter(a => !a.done).length;
 }

  btnClearCompleted = function(){ 
    this.clearCompleted.emit();
  }

}

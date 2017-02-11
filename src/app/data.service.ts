import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http : Http) { }


  getTodos() {
     let headers = new Headers({
      "content-Type" : "application/json",
      "Authorization" : "token 36e9dd50-3012-4300-9af4-4c0ba6b8230b"
    });

    let options = new RequestOptions({
      headers : headers
    });

    // this.http.get("/me/todomvc", options).subscribe(res =>  {
    //   this.todos = res.json();
    // });

     return this.http.get("/me/todomvc", options).map(x => x.json());
  }

  saveTodos(todos : any[]){
    let headers = new Headers({
      "content-Type" : "application/json",
      "Authorization" : "token apikey"
    });

    let options = new RequestOptions({
      headers : headers
    });

    this.http.post("/me/todomvc", todos, options).subscribe();
  }
}

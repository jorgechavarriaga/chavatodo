import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined;
  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: true

      }
    ]
  }

  toggleDone(id: number) {
    this.todos?.map((value, index) => {
      if (index == id) value.completed = !value.completed;
      return value
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos?.filter((value, index) => index !== id);
  }

  addTodo() {
    if (this.inputTodo.length > 0) {
      this.todos?.push({
        content: this.inputTodo,
        completed: false
      });
      this.inputTodo = "";
    }
  }
}

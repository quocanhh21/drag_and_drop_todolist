import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  @Output() newTaskEvent = new EventEmitter<Todo>();

  addTask(taskText: string) {
    console.log(taskText);
    const newTask: Todo = {
      id: Math.random(),
      name: taskText
    };

    this.newTaskEvent.emit(newTask);
  }
}

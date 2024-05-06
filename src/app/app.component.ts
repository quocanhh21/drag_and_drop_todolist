import { Component, input } from '@angular/core';
import { Todo } from '../todo';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,TodoCardComponent,TodoAddComponent,TodoDeleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
    todoList: Todo[] = [
      {
      id: 123,
      name: 'Learn Angular Framework',
      },
      {
        id: 456,
        name: 'Learn DotNet',
      },
      {
        id: 789,
        name: 'Learn SQL Server',
      }
  ];

  trashTodoList: Todo[] = [
    {
    id: 13,
    name: 'Interviews',
    },
    {
      id: 14,
      name: 'Meetings',
    }
];

  onTodoAdded(newTodo: Todo) {
    this.todoList.push(newTodo);
  }

  emptyTrash() {
    this.trashTodoList = [];
  }
}

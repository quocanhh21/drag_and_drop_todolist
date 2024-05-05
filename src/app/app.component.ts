import { Component, input } from '@angular/core';
import { Todo } from '../todo';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,TodoCardComponent],
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

  addTask(taskText: string) {
    console.log(taskText);
  }
}

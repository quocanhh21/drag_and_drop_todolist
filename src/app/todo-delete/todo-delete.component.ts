import { Component, Input } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-delete',
  standalone: true,
  imports: [],
  templateUrl: './todo-delete.component.html',
  styleUrl: './todo-delete.component.css'
})
export class TodoDeleteComponent {
  @Input() trashTodoList!: Todo;
}

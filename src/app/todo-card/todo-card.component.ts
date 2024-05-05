import { Component,Input } from '@angular/core';
import {Todo} from '../../todo';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  template: `
   <li class="task">
          <p>{{todo.name}}</p>
    </li>
  `,
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {
 @Input() todo!: Todo;
}

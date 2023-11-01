import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!: string;
  desc!: string; // Change 'String' to 'string'
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {

  }

  onSubmit() {
    const todo = {
      sno: 5,
      title: this.title,
      desc: this.desc, // Change 'String' to 'string'
      active: true
    }
    this.todoAdd.emit(todo);
}

}


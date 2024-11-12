import { Component, signal } from '@angular/core';
import { ITodolist } from '../../model/interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightTaskDirective } from '../../directives/highlight-task.directive';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule, HighlightTaskDirective],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todolist: ITodolist[] = []

  newTask: string = ''

  isCompleted = signal<string>('Pending')


  addTodo(){
    this.todolist.push({title: this.newTask, completed: false})
    this.newTask = ''
  }

  deleteTodo(todo: ITodolist){
    this.todolist = this.todolist.filter(task => task !== todo )
  }

  toggleTodo(todo: ITodolist){
    todo.completed = !todo.completed
    if (todo.completed) {
      return this.isCompleted.set('Completed')
    }
    return this.isCompleted.set('Pending') 
  }
}

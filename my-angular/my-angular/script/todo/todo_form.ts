import {Component, Output, EventEmitter} from 'angular2/core';
import {Todo} from './todo';
@Component({
    selector: 'todo-form',
    templateUrl: 'WebContent/html/todo/form.html'
})
export class TodoForm {
    @Output() newTask = new EventEmitter<Todo>();
    task: string = '';
    addTodo() {
        if (this.task) {
            this.newTask.next({ text: this.task, done: false });
        }
        this.task = '';
    }
}

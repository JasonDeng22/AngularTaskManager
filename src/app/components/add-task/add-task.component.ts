import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  // you want to have properties for each field when you have forms
  text: string = "";
  day: string = "";
  reminder: boolean = false;

  // we need to create a two-way data binding for the form inputs with ngModel from the Forms Module
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.text || !this.day){ // basic form validation
      alert("Please fill out all the fields");
      return;
    }

    const newTask: Task = { // create new Task object, now we want to submit it to our server with our service. 
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    // we want to do this in our parent component, so we would want to emit this event
    this.onAddTask.emit(newTask);

    // clear the form
    this.text = "";
    this.day = "";
    this.reminder = false;

    //console.log("submitted");
  }
}

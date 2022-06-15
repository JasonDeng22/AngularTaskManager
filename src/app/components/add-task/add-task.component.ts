import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UIService } from '../../services/ui.service';
import { Task } from '../../Task';
import { Subscription } from 'rxjs';


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
  showAddTask: boolean = true; // by default, show the form
  subscription!: Subscription;

  // we need to create a two-way data binding for the form inputs with ngModel from the Forms Module

  // remember we need to include Services in parameter for it to be included
  constructor(private uiService: UIService) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value)); 
      // onToggle returns an Observable, so we want to subscribe to it when it returns the true or false value.

  }

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

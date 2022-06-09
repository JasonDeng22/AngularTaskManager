import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UIService {
  private showAddTask: boolean = false; // this will display addTask component based on t/f
  private subject = new Subject<any>();

  constructor() { }

  // this is how we will toggle the boolean
  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // this method will fire off when we toggle
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

  // basically, we call toggleAddTask when we click the add button, and whenever we want to do something when that happens, we 
  // subscribe to onToggle.
}

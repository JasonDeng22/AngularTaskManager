import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task'
import { HttpHeaders,HttpClient} from '@angular/common/http'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id} `;
    return this.http.delete<Task>(url);
  }

  toggleTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id} `;
    return this.http.put<Task>(url, task, httpOptions); // put updates
  }

  addTask(task: Task): Observable<Task>{
    // parameters are apiUrl for the location of database server, task is the thing to submit, and httpOptions
    // will provide the header 
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }
}
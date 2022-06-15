import { Component, OnInit } from '@angular/core';
import { UIService } from '../../services/ui.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = true;
  subscription!: Subscription;

  // add router provider so we can get what url we are currently on
  constructor(private uiService: UIService, private router:Router) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value)); // onToggle returns an Observable, so we want to subscribe to it when it returns the true or false value.
  } // remember to use a service, we have to add it to our constructor

  ngOnInit(): void {
  }

  toggleAddTask() {
    // when we click the button, call in our service the toggleAddTask button
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}

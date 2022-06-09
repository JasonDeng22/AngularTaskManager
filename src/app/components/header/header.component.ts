import { Component, OnInit } from '@angular/core';
import { UIService } from '../../services/ui.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UIService) { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    // when we click the button, call in our service the toggleAddTask button
    this.uiService.toggleAddTask();
  }

}

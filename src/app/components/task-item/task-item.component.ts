import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimesRectangle } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {

  @Input() task!: Task;

  faTimesRectangle = faTimesRectangle;

  constructor() { }

  ngOnInit(): void {

  }
}

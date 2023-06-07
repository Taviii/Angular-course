import { Component } from '@angular/core';
import { ModelService } from '../model/model.service';

@Component({
  selector: 'app-tasks-filter',
  templateUrl: './tasks-filter.component.html',
  styleUrls: ['./tasks-filter.component.css']
})
export class TasksFilterComponent {
  constructor(public model: ModelService){}

}

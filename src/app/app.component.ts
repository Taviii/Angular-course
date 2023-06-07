import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TodoList } from './model/todo-list';
import { ModelService } from './model/model.service';
import { FormControl, FormGroup, NgControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
};
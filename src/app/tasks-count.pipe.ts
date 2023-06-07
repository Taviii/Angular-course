import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tasksCount'
})
export class TasksCountPipe implements PipeTransform {
  
  transform(count: number): string {
    switch (count) {
      case 0: return 'Brak zadań';
      case 1: return '1 zadanie';
      case 2: 
      case 3: 
      case 4: return '${count} zadania';
      default: return '${count} zadań';
    }
  }
}

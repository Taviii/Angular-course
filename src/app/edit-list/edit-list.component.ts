import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelService } from '../model/model.service';

@Component({
  selector: 'app-edit-list-component',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})

export class EditListComponent {

  nrListy: number = 0;

  listName: string = '';

  constructor(activeRoute: ActivatedRoute, private router: Router, private model: ModelService){
    this.nrListy = +activeRoute.snapshot.params['nrListy'];
    this.listName = model.list?.name || '';
  }

  cancel(){
    this.router.navigateByUrl('/');
  }

  save(){
    if (this.model.list)
    this.model.list.name = this.listName
  }
}
function Injection(target: typeof EditListComponent): void | typeof EditListComponent {
  throw new Error('Function not implemented.');
}


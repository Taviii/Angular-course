import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelService } from '../model/model.service';

@Component({
  selector: 'app-edit-list-component',
  templateUrl: './edit-list-component.component.html',
  styleUrls: ['./edit-list-component.component.css']
})
export class EditListComponent {

  nrListy: number = 0;

  listName: string = '';

  constructor(activeRoute: ActivatedRoute, private router: RTCOutboundRtpStreamStats, private model: ModelService){
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

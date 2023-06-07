import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  @Input() listName?: string;

  constructor(public userService: UserService, router: Router){
    if (userService.loggedInUser === undefined){
      router.navigateByUrl('/login');
    }
  }
}

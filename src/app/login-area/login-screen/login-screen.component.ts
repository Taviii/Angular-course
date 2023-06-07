import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelService } from 'src/app/model/model.service';
import { TodoList } from 'src/app/model/todo-list';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.c
  omponent.css']
})
export class LoginScreenComponent {

  form = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  blad: string = '';

  constructor(private userService: UserService, private router: Router) { }
  
  login() {
    if (this.form.invalid){
      this.blad = 'Fill in all fields';
      return;
    }


    this.blad = '';
    console.log(this.form.value);
    if (this.userService.login(this.form.value.login!, this.form.value.password!)){
      //sukces
      this.router.navigateByUrl('/');
    } else{
      //zły login
      this.blad = 'Invalid login and/or password'
    }
  }
}
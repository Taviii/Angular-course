import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-konto',
  templateUrl: './form-konto.component.html',
  styleUrls: ['./form-konto.component.css']
})
export class FormKontoComponent {

  formAccount = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    haslo: new FormControl('', [Validators.required, Validators.minLength(8)]),
    powtorzHaslo: new FormControl('', [Validators.required,]),
    rokUrodzenia: new FormControl('', [Validators.required]),
  })

}


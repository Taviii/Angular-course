import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EditListComponent } from './edit-list-component.component';

const routes: Routes = [
  { path: '', component: EditListComponent}
]

@NgModule({
  declarations: [
    EditListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class LoginAreaModule { }

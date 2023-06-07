import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddTaskComponent } from './add-task/add-task.component';
// import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { ModelService } from './model/model.service';
import { WyroznijDirective } from './wyroznij.directive';
import { FormatujZadanieDirective } from './formatuj-zadanie.directive';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TasksCountPipe } from './tasks-count.pipe';
import { FormKontoComponent } from './form-konto/form-konto.component';
import { TasksScreenComponent } from './tasks-screen/tasks-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './edit-list/edit-list.component';
import { ModelModule } from './model/model.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TasksScreenComponent},
  { path: 'login', loadChildren: () => import('./login-area/login-area.module').then(m => m.LoginAreaModule)},
  { path: "edit/:nrListy", component: EditListComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskComponent,
    TasksTableComponent,
    WyroznijDirective,
    FormatujZadanieDirective,
    TasksCountPipe,
    FormKontoComponent,
    TasksScreenComponent,
    // HttpClientModule
  ],
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
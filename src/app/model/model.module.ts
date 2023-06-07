import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelDaService } from './model-da.service';
import { ModelService } from './model.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ModelDaService,
              ModelService]
})
export class ModelModule { }

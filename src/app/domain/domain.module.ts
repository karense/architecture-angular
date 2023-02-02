import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateUserCase } from './usecase/user.usecase';
import { ZoneUseCase } from './usecase/zone.usecase';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ZoneUseCase,
  ]
})
export class DomainModule { }

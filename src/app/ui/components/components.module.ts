import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateUserCase } from 'src/app/domain/usecase/user.usecase';
import { CreateUserGateway } from 'src/app/domain/models/user/gateway/user.gateway';
import { UserService } from 'src/app/infrastructure/driven-adapter/service/user.service';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomainModule } from 'src/app/domain/domain.module';
import { NavComponent } from './nav/nav.component';
import { ZoneService } from 'src/app/infrastructure/driven-adapter/service/zone.service';
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';
import { FormZoneComponent } from './form-zone/form-zone.component';
import { ZoneListComponent } from './zone-list/zone-list.component';

const userCreateUseCaseFactory = 
(userGateway: CreateUserGateway) => new PostCreateUserCase(userGateway);

export const userCreateUseCaseProvider = {
  provide: CreateUserGateway,
  useFactory: userCreateUseCaseFactory,
  deps: [CreateUserGateway]
}


@NgModule({
  exports:[
    UserComponent,
    NavComponent,
    FormZoneComponent,
    ZoneListComponent
  ],
  declarations: [
    UserComponent,
    NavComponent,
    FormZoneComponent,
    ZoneListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DomainModule,
  ],
  providers:[
    userCreateUseCaseProvider,
    { provide: CreateUserGateway, useClass: UserService},
    {provide: ZoneGateway, useClass: ZoneService}

  ]
})

export class ComponentsModule {
}
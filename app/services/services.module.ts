import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { TranslateModule }  from 'ng2-translate/ng2-translate';

import { ServicesComponent }  from './services.component';
import { ServiceComponent }  from './service/service.component';
import { ServicesService } from './services.service';
import { servicesRouting } from './services.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    servicesRouting,
    TranslateModule.forRoot()
  ],
  declarations: [
    ServicesComponent,
    ServiceComponent
  ],
  providers: [
    ServicesService
  ],
  exports: [
    ServicesComponent,
    ServiceComponent
  ]
})
export class ServicesModule { }
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { CustomersComponent }   from './customers.component';
import { CustomersService }     from './customers.service';

import { customersRouting }   from './customers.routing';

@NgModule({
  imports:      [
    CommonModule,
    customersRouting
  ],
  declarations: [
    CustomersComponent
  ],
  providers: [
    CustomersService
  ],
  exports:      [ CustomersComponent ]
})
export class CustomersModule {
}
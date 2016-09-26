import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { CustomersComponent }   from './customers.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomersService }     from './customers.service';

import { customersRouting }   from './customers.routing';

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    customersRouting
  ],
  declarations: [
    CustomersComponent,
    CustomerAddComponent
  ],
  providers: [
    CustomersService
  ],
  exports: [
    CustomersComponent,
    CustomerAddComponent
  ]
})
export class CustomersModule {
}
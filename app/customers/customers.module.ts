import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { CustomersComponent }   from './customers.component';
import { CustomerComponent }   from './customer/customer.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
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
    CustomerComponent,
    CustomerEditComponent
  ],
  providers: [
    CustomersService
  ],
  exports: [
    CustomersComponent,
    CustomerComponent,
    CustomerEditComponent
  ]
})
export class CustomersModule {
}
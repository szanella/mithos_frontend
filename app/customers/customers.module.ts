import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { TranslateModule }  from 'ng2-translate/ng2-translate';

import { CustomersComponent }   from './customers.component';
import { CustomerComponent }   from './customer/customer.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerAddPerformanceComponent } from './customer-add-performance/customer-add-performance.component';
import { CustomersService }     from './customers.service';

import { customersRouting }   from './customers.routing';

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    customersRouting,
    TranslateModule.forRoot()
  ],
  declarations: [
    CustomersComponent,
    CustomerComponent,
    CustomerEditComponent,
    CustomerAddPerformanceComponent
  ],
  providers: [
    CustomersService
  ],
  exports: [
    CustomersComponent,
    CustomerComponent,
    CustomerEditComponent,
    CustomerAddPerformanceComponent
  ]
})
export class CustomersModule {
}
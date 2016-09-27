import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { CustomersComponent }     from './customers.component';
import { CustomerComponent }     from './customer/customer.component';
import { CustomerEditComponent }   from './customer-edit/customer-edit.component';

const customersRoutes: Routes = [
  {
    path: 'customers',
    children: [
      {
        path: '',
        component: CustomersComponent
      },
      {
        path: 'add',
        component: CustomerEditComponent
      },
      {
        path: ':id',
        component: CustomerComponent
      },
      {
        path: 'edit/:id',
        component: CustomerEditComponent
      }
    ]
  }
];

export const customersRouting: ModuleWithProviders = RouterModule.forRoot(customersRoutes);
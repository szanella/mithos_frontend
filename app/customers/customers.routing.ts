import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { CustomersComponent }     from './customers.component';
import { CustomerAddComponent }   from './customer-add/customer-add.component';

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
        component: CustomerAddComponent
      }
    ]
  }
];

export const customersRouting: ModuleWithProviders = RouterModule.forRoot(customersRoutes);
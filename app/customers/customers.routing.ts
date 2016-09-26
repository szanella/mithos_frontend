import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { CustomersComponent }   from './customers.component';

const customersRoutes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent
  }
];

export const customersRouting: ModuleWithProviders = RouterModule.forRoot(customersRoutes);
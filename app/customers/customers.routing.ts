import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { CustomersComponent }     from './customers.component';
import { CustomerComponent }     from './customer/customer.component';
import { CustomerEditComponent }   from './customer-edit/customer-edit.component';
import { CustomerAddPerformanceComponent }  from './customer-add-performance/customer-add-performance.component';

const customersRoutes: Routes = [
  {
    path: 'customers',
    data: {
      breadcrumb: 'breadcrumb.customers'
    },
    children: [
      {
        path: '',
        component: CustomersComponent
      },
      {
        path: 'add',
        component: CustomerEditComponent,
        data: {
          breadcrumb: 'breadcrumb.customersSection.add'
        }
      },
      {
        path: ':id',
        data: {
          paramBreadcrumb: 'id'
        },
        children: [
          {
            path: '',
            component: CustomerComponent
          },
          {
            path: 'edit',
            component: CustomerEditComponent,
            data: {
              breadcrumb: 'breadcrumb.customersSection.edit',
              paramBreadcrumb: ''
            }
          },
          {
            path: 'addperformance',
            component: CustomerAddPerformanceComponent,
            data: {
              breadcrumb: 'breadcrumb.customersSection.addPerformance',
              paramBreadcrumb: ''
            }
          }
        ]
      }
    ]
  }
];

export const customersRouting: ModuleWithProviders = RouterModule.forRoot(customersRoutes);
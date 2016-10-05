import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { ServicesComponent }     from './services.component';

const servicesRoutes: Routes = [
  {
    path: 'services',
    data: {
      breadcrumb: 'breadcrumb.services'
    },
    children: [
      {
        path: '',
        component: ServicesComponent
      }
    ]
  }
];

export const servicesRouting: ModuleWithProviders = RouterModule.forRoot(servicesRoutes);
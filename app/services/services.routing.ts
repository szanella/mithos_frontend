import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { ServicesComponent }     from './services.component';
import { ServiceComponent } from "./service/service.component";

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
      },
      {
        path: ':id',
        component: ServiceComponent,
        data: {
          paramBreadcrumb: 'id'
        }
      }
    ]
  }
];

export const servicesRouting: ModuleWithProviders = RouterModule.forRoot(servicesRoutes);
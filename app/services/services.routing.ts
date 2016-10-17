import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { ServicesComponent }     from './services.component';
import { ServiceComponent } from "./service/service.component";
import { ServiceEditComponent } from "./service-edit/service-edit.component";

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
        path: 'add',
        component: ServiceEditComponent,
        data: {
          breadcrumb: 'breadcrumb.servicesSection.add'
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
            component: ServiceComponent
          },
          {
            path: 'edit',
            component: ServiceEditComponent,
            data: {
              breadcrumb: 'breadcrumb.servicesSection.edit',
              paramBreadcrumb: ''
            }
          }
        ]
      }
    ]
  }
];

export const servicesRouting: ModuleWithProviders = RouterModule.forRoot(servicesRoutes);
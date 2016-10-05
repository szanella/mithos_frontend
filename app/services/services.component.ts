import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { ServicesService }    from './services.service';
import { Service }            from "./service";

@Component({
  templateUrl: 'app/services/services.component.html'
})
export class ServicesComponent implements OnInit {
  services: Service[];

  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.servicesService.getServices()
      .then(services => {
        this.services = services;
      });
  }

  gotoService(service): void {
    let link = ['services', service.id];
    this.router.navigate(link);
  }
}
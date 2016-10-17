import { Component, Input, OnInit }  from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ServicesService } from '../services.service';
import { Service }  from '../service';

@Component({
  templateUrl: 'app/services/service-edit/service-edit.component.html'
})
export class ServiceEditComponent implements OnInit{
  @Input() service: Service;
  isUpdate: boolean;

  constructor(
    private servicesService: ServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service = new Service();
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (id) {
        this.isUpdate = true;
      }
      else {
        this.isUpdate = false;
      }
    })
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (id) {
        this.servicesService.getService(id)
          .then((service) => {
            this.service = service;
          });
      }
    })
  }

  goBack(): void {
    let link;
    if(this.isUpdate) {
      link = ['/services', this.service.id];
    }
    else {
      link = ['/services'];
    }
    this.router.navigate(link);
  }

  saveService(): void {
    if(this.service.description && this.service.price && +this.service.price > 0) {
      if(!this.service.id) {
        this.servicesService.create(this.service)
          .then(res => this.goBack());
      }
      else {
        this.servicesService.update(this.service)
          .then(res => this.goBack());
      }
    }
  }
}
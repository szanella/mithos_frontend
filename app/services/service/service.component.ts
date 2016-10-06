import { Component, OnInit } from "@angular/core";

import { ServicesService }  from '../services.service';
import { Service } from "../service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  templateUrl: 'app/services/service/service.component.html'
})
export class ServiceComponent implements OnInit{
  service: Service;
  constructor(
    private servicesService: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.service = new Service();
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.servicesService.getService(id)
        .then(service => {
          this.service = service;
        });
    });
  }

  gotoEdit(): void {
    let link = ['services', this.service.id, 'edit'];
    this.router.navigate(link);
  }
}
import { Component, OnInit }    from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { Performance }  from '../../performances/performance';
import { ServicesService }  from '../../services/services.service';
import { PerformancesService } from '../../performances/performances.service';
import { Service } from "../../services/service";

@Component ({
  templateUrl: 'app/customers/customer-add-performance/customer-add-performance.component.html'
})
export class CustomerAddPerformanceComponent implements OnInit {
  customerId: number;
  performance: Performance;
  services: Service[];

  constructor(
    private servicesService: ServicesService,
    private performancesService: PerformancesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.performance = new Performance();
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (id) {
        this.customerId = id;
        this.performance.customer.id = id;
      }
    });
    this.servicesService.getServices()
      .then(services => {
        this.services = services;
        // Generate the select input on the next digest cycle
        setTimeout(() => {
          // Cast the JQuery object to "any" to prevent syntax errors
          (<any>$('select')).material_select();
        }, 0);
      });
  }

  goBack(): void {
    this.router.navigate(['/customers', this.customerId]);
  }

  savePerformance(): void {
    //TO REMOVE
    this.performance.date = new Date();
    this.performancesService.savePerformance(this.performance)
      .then(() => this.goBack());
  }
}
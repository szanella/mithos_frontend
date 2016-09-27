import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params, Router}  from '@angular/router';

import { CustomersService }   from '../customers.service';
import { Customer }           from "../customer";

@Component({
  templateUrl: 'app/customers/customer/customer.component.html'
})

export class CustomerComponent implements OnInit {
  customer: Customer;

  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.customer = new Customer();
  }

  ngOnInit(): void {
    this.route.params.forEach((params:Params) => {
      let id = +params['id'];
      this.customersService.getCustomer(id)
        .then(customer => {
          this.customer = customer;
        });
    });
  }

  gotoEdit(): void {
    let link = ['/customers/edit', this.customer.id];
    this.router.navigate(link);
  }
}
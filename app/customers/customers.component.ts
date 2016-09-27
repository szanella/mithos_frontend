import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Customer }           from './customer';
import { CustomersService }   from './customers.service';

@Component({
  selector: 'customers',
  templateUrl: 'app/customers/customers.component.html',
  styleUrls: ['app/customers/customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customersService.getCustomers()
      .then(customers => {
        this.customers = customers
      });
  }

  gotoCustomer(customer): void {
    let link = ['/customers', customer.id];
    this.router.navigate(link);
  }
}
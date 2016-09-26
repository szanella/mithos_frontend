import { Component, OnInit }      from '@angular/core';

import { Customer }       from './customer';
import { CustomersService }        from './customers.service';

@Component({
  selector: 'customers',
  templateUrl: 'app/customers/customers.component.html'
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  constructor(
    private customersService: CustomersService
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
}
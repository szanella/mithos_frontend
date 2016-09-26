import { Component, Input }    from '@angular/core';
import { Router }              from '@angular/router';

import { CustomersService }   from '../customers.service';
import { Customer }           from "../customer";

@Component({
  templateUrl: 'app/customers/customer-add/customer-add.component.html',
  styleUrls: ['app/customers/customer-add/customer-add.component.scss']
})

export class CustomerAddComponent {
  @Input() customer: Customer = new Customer();

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) { }

  goBack(): void {
    this.router.navigate(['/customers']);
  }

  saveCustomer(): void {
    if(this.customer.name && this.customer.surname) {
      this.customersService.saveCustomer(this.customer)
        .then(res => this.goBack());
    }
  }
}
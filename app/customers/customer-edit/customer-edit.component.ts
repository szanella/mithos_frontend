import { Component, Input, OnInit }         from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { CustomersService }   from '../customers.service';
import { Customer }           from "../customer";

@Component({
  templateUrl: 'app/customers/customer-edit/customer-edit.component.html',
  styleUrls: ['app/customers/customer-edit/customer-edit.component.scss']
})

export class CustomerEditComponent implements OnInit {
  @Input() customer: Customer;
  isUpdate: boolean;

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.customer = new Customer();
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (id) {
        this.isUpdate = true;
      }
      else {
        this.isUpdate = false;
      }
    });
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (id) {
        this.customersService.getCustomer(id)
          .then((customer) => {
            this.customer = customer;
          });
      }
    })
  }

  goBack(): void {
    this.router.navigate(['/customers']);
  }

  saveCustomer(): void {
    if(this.customer.name && this.customer.surname) {
      if (!this.customer.id) {
        this.customersService.create(this.customer)
          .then(res => this.goBack());
      }
      else {
        this.customersService.update(this.customer)
          .then(res => this.goBack());
      }
    }
  }
}
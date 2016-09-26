"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var customers_service_1 = require('../customers.service');
var customer_1 = require("../customer");
var CustomerAddComponent = (function () {
    function CustomerAddComponent(customersService, router) {
        this.customersService = customersService;
        this.router = router;
        this.customer = new customer_1.Customer();
    }
    CustomerAddComponent.prototype.goBack = function () {
        this.router.navigate(['/customers']);
    };
    CustomerAddComponent.prototype.saveCustomer = function () {
        var _this = this;
        if (this.customer.name && this.customer.surname) {
            this.customersService.saveCustomer(this.customer)
                .then(function (res) { return _this.goBack(); });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', customer_1.Customer)
    ], CustomerAddComponent.prototype, "customer", void 0);
    CustomerAddComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/customers/customer-add/customer-add.component.html',
            styleUrls: ['app/customers/customer-add/customer-add.component.scss']
        }), 
        __metadata('design:paramtypes', [customers_service_1.CustomersService, router_1.Router])
    ], CustomerAddComponent);
    return CustomerAddComponent;
}());
exports.CustomerAddComponent = CustomerAddComponent;
//# sourceMappingURL=customer-add.component.js.map
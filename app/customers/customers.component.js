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
var customers_service_1 = require('./customers.service');
var CustomersComponent = (function () {
    function CustomersComponent(customersService) {
        this.customersService = customersService;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    CustomersComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customersService.getCustomers()
            .then(function (customers) {
            _this.customers = customers;
        });
    };
    CustomersComponent = __decorate([
        core_1.Component({
            selector: 'customers',
            templateUrl: 'app/customers/customers.component.html'
        }), 
        __metadata('design:paramtypes', [customers_service_1.CustomersService])
    ], CustomersComponent);
    return CustomersComponent;
}());
exports.CustomersComponent = CustomersComponent;
//# sourceMappingURL=customers.component.js.map
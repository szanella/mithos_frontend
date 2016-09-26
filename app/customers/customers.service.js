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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var CustomersService = (function () {
    function CustomersService(http) {
        this.http = http;
        this.customersUrl = 'http://localhost:3001/api/customers';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    CustomersService.prototype.getCustomers = function () {
        return this.http
            .get(this.customersUrl)
            .toPromise()
            .then(function (response) { return response.json().customers; })
            .catch(this.handleError);
    };
    CustomersService.prototype.saveCustomer = function (customer) {
        return this.http
            .post(this.customersUrl, JSON.stringify(customer), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CustomersService.prototype.handleError = function (error) {
        console.error('Error in CustomersService', error);
        return Promise.reject(error.message || error);
    };
    CustomersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CustomersService);
    return CustomersService;
}());
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map
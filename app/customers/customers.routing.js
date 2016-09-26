"use strict";
var router_1 = require('@angular/router');
var customers_component_1 = require('./customers.component');
var customer_add_component_1 = require('./customer-add/customer-add.component');
var customersRoutes = [
    {
        path: 'customers',
        children: [
            {
                path: '',
                component: customers_component_1.CustomersComponent
            },
            {
                path: 'add',
                component: customer_add_component_1.CustomerAddComponent
            }
        ]
    }
];
exports.customersRouting = router_1.RouterModule.forRoot(customersRoutes);
//# sourceMappingURL=customers.routing.js.map
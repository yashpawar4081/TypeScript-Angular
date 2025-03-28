"use strict";
class CustomerA {
    showsTimings() {
        console.log('**** ALL SHOW TIMINGS****');
    }
}
class SilverCustomerA extends CustomerA {
    printTicket() {
        console.log('silver customer ticket printed');
    }
}
let cust1 = new SilverCustomerA();
cust1.showsTimings();
cust1.printTicket();

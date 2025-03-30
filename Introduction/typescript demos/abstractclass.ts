abstract class CustomerA{
    showsTimings(){
        console.log('**** ALL SHOW TIMINGS****');
    }

    abstract printTicket() : void;
}
    class SilverCustomerA extends CustomerA{
        printTicket() : void{
            console.log('silver customer ticket printed');
    }
}

class AdvancedSilverCustomerA extends SilverCustomerA {
    printTicket() : void{
        console.log('advanced silver customer ticket printed');
}
}


let cust1 : CustomerA = new SilverCustomerA();
cust1.showsTimings();
cust1.printTicket();

let cust2 : CustomerA = new AdvancedSilverCustomerA();
cust2.showsTimings();
cust2.printTicket();
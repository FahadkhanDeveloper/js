// this refers to the object of the class
class Bank {
    balance=0;
    constructor(balance) {
        this.balance = this.balance + balance;
    }
    credit(balance) {  // +
        // Gaurd clause
        if(balance <= 0) return;
        this.balance = this.balance + balance
    }
    debit = (balance) => { // -
        if(balance <= 0 && balance > this.balance) return;

        this.balance = this.balance - balance;
    }
    // getRef() {
    //     return this;
    // }
    getBalance() {
        return this.balance;
    }
}
// const obj1 = new Bank(500);   // it we cannot send value as a paramenter in constructor it will be error in javascrit

const user1 = new Bank(500);
user1.debit(-100);
console.log("Your Balance is :" + user1.getBalance())









// const obj2 = obj1.getRef();
// if(obj1 === obj2) {
//     console.log("yes")
// }
// else {
//     console.log("No")
// }



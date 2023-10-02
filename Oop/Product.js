class Product {
    name;
    price;
    qty;
    deliver() {

    }
    bill = () => {
        return this.price * this.qty;
    }
    discount = () => {
        return (this.price * this.qty) * 5 / 100;
        
    }
}
module.exports = Product   // this export is for ES 5 means for node
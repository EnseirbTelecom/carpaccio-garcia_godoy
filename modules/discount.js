module.exports = class Discount {

    NO_DISCOUNT = 0
    PROGRESSIVE_DISCOUNT
    FLAT_DISCOUNT = 30
    FIXED_DISCOUNT

    static progressive(price) {
        if( price >= 50000 ){
            return 15
        }
        else if( price >= 10000 ) {
            return 10
        }
        else if( price >= 7000 ) {
            return 7
        }
        else if( price >= 5000) {
            return 5
        }
        else if( price >= 1000 ) {
            return 3
        }
        return 0
    }

    static fixed(price){
        if( price >= 100 && price < 400 ){
            return 10
        }
        else if( price >= 400 && price < 1000 ){
            return 50
        }
        else if( price >= 1000){
            return 200
        }
        return 0
    }


    static caclDiscountedPrice(price, discount){

        switch(discount){
            case "NO_DISCOUNT":
                return price
            case "PROGRESSIVE_DISCOUNT":
                const progressiveDiscount = progressive(price)
                return price*(1-progressiveDiscount/100)
            case "FLAT_DISCOUNT":
                return price*0,7
            case "FIXED_DISCOUNT":
                const fixedDiscount = fixed(price)
                return price-fixedDiscount
        }
    }

}





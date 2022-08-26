// let a = 0;
// const b = 2;

// a += 3;
// b += 5;
// console.log(a, b)

let str = "4"
let num = 1

// console.log(str+num)

// function () {
//     return a++;
// }


//global scope
let plus = document.querySelector(".quantity__plus"),
    minus = document.querySelector(".quantity__minus"),
    qty = new Number(document.querySelector(".quantity__number").value);

const add = () => {
    if (qty <= 9 ) {
        qty += 1
    } else {
        alert("You can only buy 10 units of this product");
    }

    qty_new = new String(qty);
    document.querySelector(".quantity__number").value = qty_new;
    console.log(qty)
}


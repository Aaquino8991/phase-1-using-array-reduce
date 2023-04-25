const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries =  batteryBatches.reduce(function(accum, element) {
  return element + accum;
}, 0);

console.log(totalBatteries);
// Code your solution here

// const products = [
//   { name: 'Shampoo', price: 4.99 },
//   { name: 'Donuts', price: 7.99 },
//   { name: 'Cookies', price: 6.49 },
//   { name: 'Bath Gel', price: 13.99 }
// ];

// function getTotalAmountForProducts(products) {
//   let totalPrice = 0;

//   for (const product of products) {
//     totalPrice += product.price;
//   }

//   return totalPrice;
// }

// console.log(getTotalAmountForProducts(products));


// const couponLocations = [
//   { room: 'Living Room', amount: 5 },
//   { room: 'Kitchen', amount: 2 },
//   { room: 'Bathroom', amount: 1 },
//   { room: 'Master Bedroom', amount: 7 }
// ];

// function ourReduce(arr, reducer, init) {
//   let accum = init;
//   for (const element of arr) {
//     accum = reducer(accum, element)
//   }
//   return accum;
// }

// function couponCounter(totalAmount, location) {
//   return totalAmount + location.amount;
// }

// console.log(couponLocations.reduce(couponCounter, 0));

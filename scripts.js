//Print odds 1-20
for (var i = 0; i < 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//Decreasing Multiples of 3
for (var i = 100; i > 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

//Print the Sequence
myArray = [4, 2.5, 1, -0.5, -2, -3.5];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//Sigma
let sum = 0;
for (var i = 0; i < 101; i++) {
    sum += i;
}
console.log(sum);

//Factorial
let product = 1;
for (var i = 1; i < 13; i++) {
    product *= i;
}
console.log(product);
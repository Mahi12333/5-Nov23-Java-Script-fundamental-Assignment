//Usage of the Comma Operator in JavaScript:

//The comma operator in JavaScript allows you to combine multiple expressions into a single statement. 
//It evaluates each expression from left to right and returns the value of the last expression. 
//While it's less commonly used than other operators, the comma operator can be handy in specific situations, 
//such as when you need to include multiple expressions in a place where only one is expected.

let x = 1;

x = (x++, x);

console.log(x);
// Expected output: 2

x = (2, 3);

console.log(x);
// Expected output: 3


// Using the comma operator in a for loop
for(let i=1, j=5; i<5; i++, j--){
     console.log(`i:${i}, j:${j}`);
}
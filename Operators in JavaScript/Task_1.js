//The ternary operator, also known as the conditional operator, is a concise way to write conditional 
//statements in a single line. It is often used as a shorthand for the if-else statement.
//-------this is syntax
//condition ? expression_if_true : expression_if_false;










function checkevenodd(number){
   return number%2===0 ? "Even" : "Odd"
}

const result=checkevenodd(10);
console.log(result);
function checknumber(number){
   return  number >0
    ? "Positive"
    : number<0
    ? "Negative"
    : "Zero";
   
}

const result =checknumber(0);
console.log(result)
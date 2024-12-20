function sumRange(num){
    if(num == 1 ){
      return 1;
    }else{
      return num + sumRange(num -1)
    }
}

console.log(sumRange(6));
 

function power(base , exponent){
  if(exponent == 0){
    return 1
  }else{
    return base * power(base ,exponent -1);
  }
}

console.log(power(2,4));

function factorial(num){
  if(num == 1 || num == 0){
    return 1;
  }else{
    return num * factorial(num -1);
  }
}
console.log(factorial(4));

function productOfArray(array){
  
}

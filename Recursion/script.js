function fib(num){
    const arr = []
  for(let i = 0 ; i < num ;i++){
        if(i === 0 )
            arr.push(0);
        else if(i == 1)
            arr.push(1)
        else{
            arr.push(arr[i-1] + arr[i - 2]);

        }
  }
  return arr;
}
function fibsRec(num, arr = [0, 1]) {
    if (arr.length >= num) {
        return arr;
    }

    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

    return fibsRec(num, arr);
}

console.log(fib(8));
console.log(fibsRec(8));

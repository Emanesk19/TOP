function merge(array, low, high) {
  if (array?.length <= 1) {
    return array;
  }

  let mid = Math.floor(array?.length / 2);
  let left = array?.slice(low, mid);
  let right = array?.slice(mid, array?.length);

  return mergeSort(merge(left), merge(right));
}
function mergeSort(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left?.length && j < right.length) {
    if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
    }else{
        result.push(right[j]);
        j++;
    }
  }
  
  while (i < left?.length) {
    result.push(left[i]);
    i++;
  }
  while(j < right?.length){
    result.push(right[j]);
    j++;
  }

  return result;
}
let array = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(merge(array, 0, array.length - 1));
 
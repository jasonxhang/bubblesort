function split(wholeArr){
  let middleIndex = Math.round(wholeArr.length/2);
  let firstHalf = wholeArr.slice(0, middleIndex);
  let secondHalf = wholeArr.slice(middleIndex)
  return [firstHalf, secondHalf]
}

function merge(left, right){
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex])
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


function mergeSort(array){
  if (array.length === 1) {
    // console.log(array);
    return array;
  }
  else {
    let firstHalf = split(array)[0]
    let secondHalf = split(array)[1]
    // console.log(firstHalf)
    // console.log(secondHalf)
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }

}

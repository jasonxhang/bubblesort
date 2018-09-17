function swap(valOne, valTwo) {
  return [valTwo, valOne];
}

function bubbleSort(array) {
  let swapped = null;
  for (let i = 0; i < array.length - 1; i++) {
    let tempArr = [array[0]]
    swapped = false;
    for (let j = 1; j < array.length - i; j++) {
      let valOne = tempArr.pop();
      let valTwo = array[j];
      if (valOne < valTwo) {
        tempArr.push(valOne, valTwo)
      } else {
        tempArr.push(...swap(valOne, valTwo))
        swapped = true;
      }
    }
    tempArr.push(...array.slice(array.length - i));
    if (swapped == false) {
      return array;
    } else {
      array = tempArr;
    }
  }
  return array;
}

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = i;
    while (arr[index - 1] > arr[index] && index > 0) {
      let temp = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = temp;
      index--;
    }
  }
  return arr;
}

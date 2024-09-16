function swap(array, left, right) {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

function divide(array, start, end) {
  const pivotValue = array[Math.floor((start + end) / 2)];

  while (start <= end) {
    while (array[start] < pivotValue) start = start + 1;
    while (array[end] > pivotValue) end = end - 1;

    if (start <= end) {
      swap(array, start, end);
      start = start + 1;
      end = end - 1;
    }
  }

  return start;
}

function quickSort(array, start = 0, end = array.length - 1) {
  if (start >= end) return;
  let index = divide(array, start, end);
  quickSort(array, start, index - 1);
  quickSort(array, index + 1, end);
  return array;
}

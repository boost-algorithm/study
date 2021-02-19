/* 
Quick Sort

아래 코드는 피벗 값을 첫 번째 원소로 설정했기 때문에 우측부터 확인하여 피벗 값보다 작은 원소를 찾는다.
- 작은 원소가 없으면 첫 번째 값까지 올 수 있도록 한다.
작은 원소를 찾았다면 이제 좌측부터 피벗 값보다 큰 원소를 찾는다.
- 이 때, 우측부터 찾았던 end 값보다 커지지 않도록 범위를 지정한다.
피벗 값보다 작은 값과 큰 값을 찾았다면 start, end의 값을 서로 교환한다.
start, end가 같아질 때까지 찾지 못했다면 해당 값과 피벗을 교환한다.
결과적으로 피벗 기준으로 왼쪽에는 피벗보다 작은 수, 오른쪽에는 피벗보다 큰 수가 남는다.

*/
const swap = (arr, curIdx, targetIdx) => {
  const curVal = arr[curIdx];
  arr[curIdx] = arr[targetIdx];
  arr[targetIdx] = curVal;
};

const sortPartition = (arr, left, right) => {
  const pivotIdx = left;
  const pivot = arr[pivotIdx];

  let start = left;
  let end = right;

  while (start < end) {
    while (arr[end] > pivot) end -= 1;
    while (start < end && arr[start] <= pivot) start += 1; // 초기에는 arr[start] === pivot

    swap(arr, start, end);
  }

  swap(arr, pivotIdx, start);

  return start;
};

const quickSort = (arr, left, right) => {
  if (left >= right) return;

  const pivotIdx = sortPartition(arr, left, right);
  quickSort(arr, left, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, right);
};

(() => {
  const testCase = [
    [5, 4, 2, 6, 1, 9, 3],
    [11, 10, 34, 5, 4, 2, 6, 1, 9, 3],
  ];

  testCase.forEach(arr => {
    quickSort(arr, 0, arr.length - 1);
    console.log(arr);
  });
})();

/* 
삽입 정렬은 두 번째 원소부터 시작하여 그 앞(왼쪽)의 원소들과 비교하여 삽입할 위치를 지정한 후 원소를 뒤로 옮기고 지정한 자리에 원소를 삽입하여 정렬하는 알고리즘이다.
즉, 두 번째 원소는 첫 번째 원소, 세 번째 원소는 두 번째와 첫 번째 원소, 네 번째 원소는 세 번째, 두 번째, 첫 번째 원소와 비교한 후 원소가 삽입될 위치를 찾는다. 원소가 삽입될 위치를 찾았다면 그 위치에 원소를 삽입하기 위해 원소를 한 칸씩 뒤로 이동시킨다.
처음 Key 값은 두 번째 원소부터 시작한다.
*/

const insertionSort = arr => {
  const swap = (arr, curIdx, targetIdx) => {
    const curVal = arr[curIdx];
    arr[curIdx] = arr[targetIdx];
    arr[targetIdx] = curVal;
  };

  const len = arr.length;
  let cur;
  for (let i = 1; i < len; i++) {
    cur = i;

    while (arr[cur] < arr[cur - 1]) {
      swap(arr, cur, cur - 1);
      cur -= 1;
    }
    console.log(arr);
  }
};

(() => {
  const testCase = [
    [5, 4, 2, 6, 1, 9, 3],
    [11, 10, 34, 5, 4, 2, 6, 1, 9, 3],
  ];
  testCase.forEach(arr => {
    insertionSort(arr);
    console.log(arr);
  });
})();

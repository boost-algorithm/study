/* 
선택 정렬은 제자리 정렬 알고리즘의 하나로, 다음와 같은 순서로 이루어진다.

1. 주어진 리스트 중에 최소값을 찾는다
2. 그 값을 맨 앞에 위치한 값과 교체한다.(패스)
3. 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.
*/

const selectionSort = arr => {
  const swap = (arr, curIdx, targetIdx) => {
    const curVal = arr[curIdx];
    arr[curIdx] = arr[targetIdx];
    arr[targetIdx] = curVal;
  };

  const len = arr.length;
  let minIdx;

  for (let i = 0; i < len; i++) {
    minIdx = i;

    for (let j = i; j < len; j++) {
      minIdx = arr[minIdx] > arr[j] ? j : minIdx;
    }

    swap(arr, i, minIdx);
  }
};

(() => {
  const testCase = [
    [5, 4, 2, 6, 1, 9, 3],
    [11, 10, 34, 5, 4, 2, 6, 1, 9, 3],
  ];
  testCase.forEach(arr => {
    selectionSort(arr);
    console.log(arr);
  });
})();

/* 
거품 정렬(Bubble sort)은 두 인접한 원소를 검사하여 정렬하는 방법이다. 시간 복잡도가 O(n^2)로 상당히 느리지만, 
코드가 단순하기 때문에 자주 사용된다. 원소의 이동이 거품이 수면으로 올라오는 듯한 모습을 보이기 때문에 지어진 이름이다.

출처 - 위키백과
*/

const bubbleSort = (arr, compare = (prev, next) => prev - next) => {
  const swap = (arr, curIdx, nextIdx) => {
    const curVal = arr[curIdx];
    arr[curIdx] = arr[nextIdx];
    arr[nextIdx] = curVal;
  };

  const len = arr.length;

  for (let i = 0; i < len; i++)
    for (let j = 0; j < len - i - 1; j++)
      if (compare(arr[j], arr[j + 1]) > 0) swap(arr, j, j + 1);
};

(() => {
  const testCase = [
    { arr: [5, 4, 2, 6, 1, 9, 3] },
    { arr: [11, 10, 34, 5, 4, 2, 6, 1, 9, 3] },
    {
      arr: [11, 10, 34, 5, 4, 2, 6, 1, 9, 3],
      compare: (prev, next) => next - prev,
    },
    {
      arr: [[5, 6, 7, 1, 2, 3], [], [1, 2, 3], [4, 2], [6, 4, 7, 3, 1]],
      compare: (prev, next) => prev.length - next.length,
    },
  ];
  testCase.forEach(({ arr, compare }) => {
    bubbleSort(arr, compare);
    console.log(arr);
  });
})();

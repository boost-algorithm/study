/* 
합병 정렬 또는 병합 정렬(merge sort)은 O(n log n) 비교 기반 정렬 알고리즘이다. 일반적인 방법으로 구현했을 때 이 정렬은 안정 정렬에 속하며, 분할 정복 알고리즘의 하나이다. 존 폰 노이만이 1945년에 개발했다. 하향식 합병 정렬에 대한 자세한 설명과 분석은 1948년 초 헤르만 골드스타인과 폰 노이만의 보고서에 등장하였다.
합병 정렬은 다음과 같이 작동한다.

1. 리스트의 길이가 1 이하이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
2. 분할(divide) : 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
3. 정복(conquer) : 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
4. 결합(combine) : 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다. 이때 정렬 결과가 임시배열에 저장된다.
5. 복사(copy) : 임시 배열에 저장된 결과를 원래 배열에 복사한다.

출처 - 위키백과
*/

const mergeSort = (() => {
  const sorted = [];

  const merge = (arr, left, mid, right) => {
    let l = left;
    let m = mid + 1;
    let idx = left;

    while (l <= mid && m <= right) {
      if (arr[l] <= arr[m]) sorted[idx++] = arr[l++];
      else sorted[idx++] = arr[m++];
    }

    while (m <= right) sorted[idx++] = arr[m++]; // 왼쪽이 먼저 삽입된 경우
    while (l <= mid) sorted[idx++] = arr[l++];

    for (let i = left; i <= right; i++) arr[i] = sorted[i];
  };

  return (divideAndMerge = (arr, left, right) => {
    let mid;

    if (left < right) {
      mid = Math.floor((left + right) / 2);

      divideAndMerge(arr, left, mid);
      divideAndMerge(arr, mid + 1, right);
      merge(arr, left, mid, right);
    }
  });
})();

(() => {
  const testCase = [
    [5, 4, 2, 6, 1, 9, 3],
    [11, 10, 34, 5, 4, 2, 6, 1, 9, 3],
    [5, 2, 43, 6, 7, 7, 1, 2],
  ];

  testCase.forEach(arr => {
    mergeSort(arr, 0, arr.length - 1);
    console.log(arr);
  });
})();

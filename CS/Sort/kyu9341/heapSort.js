/* 
힙 정렬(Heap Sort)이란 최대 힙 트리나 최소 힙 트리를 구성해 정렬을 하는 방법으로서, 내림차순 정렬을 위해서는 최대 힙을 구성하고 오름차순 정렬을 위해서는 최소 힙을 구성하면 된다. 최대 힙을 구성하여 정렬하는 방법은 아래 예와 같다.

n개의 노드에 대한 완전 이진 트리를 구성한다. 이때 루트 노드부터 부모노드, 왼쪽 자식노드, 오른쪽 자식노드 순으로 구성한다.
최대 힙을 구성한다. 최대 힙이란 부모노드가 자식노드보다 큰 트리를 말하는데, 단말 노드를 자식노드로 가진 부모노드부터 구성하며 아래부터 루트까지 올라오며 순차적으로 만들어 갈 수 있다.
가장 큰 수(루트에 위치)를 가장 작은 수와 교환한다.
2와 3을 반복한다.
출처 - 위키백과
*/

function* range(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

const swap = (arr, curIdx, targetIdx) => {
  [arr[curIdx], arr[targetIdx]] = [arr[targetIdx], arr[curIdx]];
};

const insertIntoHeap = (heap, value) => {
  heap.push(value);
  let index = heap.length - 1;

  while (index !== 0) {
    const parent = Math.floor(index / 2);
    if (heap[parent] < heap[index]) swap(heap, index, parent);
    index = parent;
  }
};

const deleteMax = heap => {
  const top = heap[0];
  swap(heap, 0, heap.length - 1);
  heap.pop();

  let parent = 0;
  let child = 1;
  const lastIdx = heap.length - 1;

  const next = () => {
    parent = child;
    child = Math.floor(child * 2) + 1;
  };

  while (child <= lastIdx) {
    if (child + 1 <= lastIdx && heap[child] < heap[child + 1]) child += 1;
    if (heap[parent] < heap[child]) swap(heap, parent, child);
    next();
  }

  return top;
};

const heapSort = arr => {
  const heap = [];

  arr.forEach(val => {
    insertIntoHeap(heap, val);
  });

  const heapSize = heap.length;
  const result = [];

  for (const i of range(1, heapSize)) {
    result.push(deleteMax(heap));
  }

  return result;
};

(() => {
  const testCase = [
    [5, 4, 2, 6, 1, 9, 3],
    [11, 10, 34, 5, 4, 2, 6, 1, 9, 3],
    [5, 2, 43, 6, 7, 7, 1, 2],
  ];
  testCase.forEach(arr => {
    console.log(heapSort(arr));
  });
})();

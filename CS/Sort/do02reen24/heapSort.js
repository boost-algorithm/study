function swap(array, left, right) {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

function heapify(heap) {
  for (let i = 1; i < heap.length; i++) {
    let child = i;
    do {
      let parent = Math.floor((child - 1) / 2);
      if (heap[parent] < heap[child]) {
        swap(heap, parent, child);
      }
      child = parent;
    } while (child !== 0);
  }
}

function heapSort(heap) {
  heapify(heap); // make max heap

  for (let i = heap.length - 1; i > 0; i--) {
    swap(heap, 0, i);
    let parent = 0;
    let child = 1;
    do {
      child = 2 * parent + 1;
      if (heap[child] < heap[child + 1] && child < i - 1) child++;
      if (heap[parent] < heap[child] && child < i) swap(heap, parent, child);
      parent = child;
    } while (child < i);
  }
  return heap;
}

console.log(heapSort([4, 1, 5, 6, 2, 8]));

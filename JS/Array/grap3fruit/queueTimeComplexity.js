class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.head.next = this.tail;
    } else this.tail.next = node;

    this.tail = node;
    this.size += 1;
  }

  length() {
    return this.size;
  }

  popLeft() {
    const popedItem = this.head;
    this.head = this.head.next;

    this.size -= 1;
    return popedItem;
  }

  print() {
    let current = this.head;
    console.log('--start print--');
    console.log(this.head.next);
    while (current) {
      console.log(current.item);
      current = current.next;
    }
  }
}

const q = new SinglyLinkedList();
const start = new Date().getTime();
for (let i = 0; i < 100000; i++) {
  q.push(1);
}

const arrSplice = [];
for (let i = 0; i < 100000; i++) {
  arrSplice.push(1);
}

const arrShift = [];
for (let i = 0; i < 100000; i++) {
  arrShift.push(1);
}
const end = new Date().getTime();
console.log('push : ', end - start);

const startQ = new Date().getTime();
for (let i = 0; i < 100000; i++) {
  q.popLeft();
}
const endQ = new Date().getTime();
console.log('Queue : ', endQ - startQ);

const startSplice = new Date().getTime();
for (let i = 0; i < 100000; i++) {
  arrSplice.splice(0, 1);
}
const endSplice = new Date().getTime();
console.log('splice : ', endSplice - startSplice);

const startShift = new Date().getTime();
for (let i = 0; i < 100000; i++) {
  arrShift.shift();
}
const endShift = new Date().getTime();
console.log('shift : ', endShift - startShift);

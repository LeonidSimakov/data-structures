export class Node<T> {
  constructor(
    public value: T,
    public next: Node<T> | null = null,
  ) {}
}

export class LinkedList<T> implements Iterable<T> {
  constructor(
    public head: Node<T> | null = null,
    public tail: Node<T> | null = null,
  ) {}

  [Symbol.iterator](): IterableIterator<T> {
    let cursor = this.head;

    return {
      [Symbol.iterator]() { return this; },

      next(): IteratorResult<T> {
        if (!cursor) {
          return { value: null, done: true }
        }

        const value = cursor.value;
        cursor = cursor?.next;

        return { value, done: false }
      }
    }
  }

  [Symbol.toPrimitive]() {
    return JSON.stringify([...this]);
  }

  pushBack(value: T): this {
    const node = new Node(value);

    if (this.head == null || this.tail == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }

  pushFront(value: T): this {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;

    if (this.tail == null) {
      this.tail = this.head;
    }

    return this;
  }

  find(comparator: (node: T) => boolean): T | undefined {
    let cursor = this.head;

    while (cursor && !comparator(cursor.value)) {
      cursor = cursor.next;
    }
  
    return cursor?.value;
  }

  static from<T>(iterable: Iterable<T>): LinkedList<T> {
    const list = new LinkedList<T>();
    for (const item of iterable) {
      list.pushBack(item);
    }
    return list;
  }

}


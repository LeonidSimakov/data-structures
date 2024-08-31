export class Node<T> {
  constructor(
    public value: T,
    public next: Node<T> | null = null,
  ) {}
}

export class LinkedList<T> {
  constructor(
    public head: Node<T> | null = null,
    public tail: Node<T> | null = null,
  ) {}

  append(value: T): this {
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
}


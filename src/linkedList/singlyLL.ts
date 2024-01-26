import { join } from 'path';

class Node<T> {
  public val: T;
  public next: Node<T> | null;
}

export class SinglyLinkedLisTailt<T> {
  private _size: number;
  private head: Node<T> | null;
  private tail: Node<T> | null;

  constructor() {
    this._size = 0;
    this.head = null;
  }

  public size() {
    return this._size;
  }

  public empty() {
    return this._size === 0;
  }

  public valueAt(index: number) {
    if (this.empty() || this._size <= index) {
      return;
    }

    let curr = this.head;
    let i = 0;

    while (i != index) {
      curr = curr!.next;
      i++;
    }

    return curr!.val;
  }

  public pushFront(val: T) {
    const node = new Node<T>();
    node.val = val;
    if (this.empty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this._size++;
  }

  public popFront() {
    if (this.empty()) {
      return null;
    }

    const node = this.head;
    this.head = this.head!.next;

    this._size--;

    return node;
  }

  public pushBack(val: T) {
    const node: Node<T> = { val: val, next: null } as Node<T>;
    if (this.empty()) {
      this.head = this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this._size++;
  }

  public popBack() {
    if (this.empty()) {
      return null;
    }

    this._size--;
    const node = this.tail;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return node;
    }

    let curr = this.head;
    let prev = curr;

    while (curr != this.tail) {
      prev = curr;

      curr = curr!.next;
    }

    this.tail = prev;
  }

  public front() {
    if (this.empty()) {
      return null;
    }
    return this.head!.val;
  }

  public back() {
    if (this.empty()) {
      return null;
    }

    return this.tail!.val;
  }

  public insert(val: T, index: number) {
    const node = { val: val, next: null } as Node<T>;

    if (this.empty()) {
      this.head = this.tail = node;
    } else if (this._size <= index) {
      this.tail!.next = node;
      this.tail = node;
    } else {
      let curr = this.head;
      let i = 0;
      while (i != index - 1) {
        curr = curr!.next;
        i++;
      }
      node.next = curr!.next;
      curr!.next = node;
    }

    this._size++;
  }

  public erase(index: number) {
    if (this.empty()) {
      return;
    }

    if (this._size <= index) {
      return;
    }

    let i = 0;
    let curr = this.head;
    while (i != index - 1) {
      curr = curr!.next;
      i++;
    }

    curr!.next = curr!.next!.next;
  }

  public valueNFromEnd(index: number) {
    let i = this._size - index;
    if (i < 0) {
      return;
    }
    let curr = this.head;

    let ii = 0;
    while (ii != i) {
      curr = curr!.next;
      ii++;
    }

    return curr!.val;
  }

  public reverse() {
    if (this.empty()) {
      return;
    }

    let curr = this.head;
    let prev = null;
    let next = this.head;
    while (next != null) {
      next = next.next;
      curr!.next = prev;
      prev = curr;
      curr = next;
    }

    let swap = this.head;
    this.head = this.tail;
    this.tail = swap;
  }

  public removeValue(val: T) {
    if (this.empty()) {
      return;
    }

    let curr = this.head;

    let prev = null;

    while (curr != null) {
      if (curr.val === val) {
        break;
      }

      prev = curr;
      curr = curr.next;
    }

    if (curr === this.head) {
      this.head = this.head!.next;
      return;
    } else if (curr === this.tail) {
      prev!.next = null;
    } else if (curr === this.tail && curr === this.head) {
      this.head = this.tail = null;
    } else {
      if (curr != null) {
        prev!.next = curr!.next;
      }
    }
  }

  public toString() {
    let out = '[';

    let curr = this.head;
    while (curr != null) {
      if (curr === this.tail) {
        out += curr.val + '';
      } else {
        out += curr.val + ' -> ';
      }
      curr = curr.next;
    }

    out += ']';

    return out;
  }
}

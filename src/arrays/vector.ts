export class Vector<T> {
  private arr: T[];
  private _size: number;

  constructor() {
    this.arr = new Array(16);
    this._size = 0;
  }

  public size() {
    return this._size;
  }

  public capacity() {
    return this.arr.length;
  }

  public isEmpty() {
    return this._size === 0;
  }

  public at(index: number) {
    if (this._size < index || index < 0) {
      throw new Error('index our of range');
    }

    return this.arr[index];
  }

  public push(val: T) {
    if (this._size >= this.capacity()) {
      this.resize(this.capacity() * 2);
    }

    this.arr[this._size] = val;
    this._size++;
  }

  public insert(val: T, index: number) {
    if (this._size < index || index < 0) {
      throw new Error('index our of range');
    }

    if (this._size >= this.capacity()) {
      this.resize(this.capacity() * 2);
    }

    this.shiftRight(index);

    this.arr[index] = val;
    this._size++;
  }

  public prepend(val: T) {
    if (this._size >= this.capacity()) {
      this.resize(this.capacity() * 2);
    }

    this.shiftRight(0);
    this.arr[0] = val;
    this._size++;
  }

  public pop() {
    const val = this.arr[this._size - 1];
    this._size--;

    if (this._size <= Math.floor(this.capacity() / 4)) {
      this.resize(Math.floor(this.capacity() / 4));
    }

    return val;
  }

  public delete(index: number) {
    const val = this.arr[index];

    this.shiftLeft(index);

    this._size--;
    if (this._size <= Math.floor(this.capacity() / 4)) {
      this.resize(Math.floor(this.capacity() / 4));
    }

    return val;
  }

  public remove(val: T) {
    while (true) {
      let index = this.arr.indexOf(val);
      if (index === -1) {
        break;
      }
      this.delete(index);
    }
  }

  public find(val: T) {
    for (let i = 0; i < this._size; i++) {
      if (val === this.arr[i]) {
        return i;
      }
    }

    return -1;
  }

  private shiftRight(index: number) {
    for (let i = this._size; i > index - 1; i--) {
      this.arr[i] = this.arr[i - 1];
    }
  }

  private shiftLeft(index: number) {
    for (let i = index; i < this._size; i++) {
      this.arr[i] = this.arr[i + 1];
    }
  }

  private resize(newCapacity: number) {
    const arr = new Array(newCapacity);
    if (newCapacity > this.capacity()) {
      for (let i = 0; i < this.arr.length; i++) {
        arr[i] = this.arr[i];
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = this.arr[i];
      }
    }

    this.arr = arr;
  }

  public toString() {
    let out = '';
    out += '[';
    for (let i = 0; i < this._size; i++) {
      if (i === this._size - 1) {
        out += this.arr[i];
      } else {
        out += this.arr[i] + ', ';
      }
    }
    out += ']';
    return out;
  }

  public toStringLong() {
    let out = '';
    out += '[';
    for (let i = 0; i < this.arr.length; i++) {
      if (i === this.arr.length - 1) {
        out += this.arr[i];
      } else {
        out += this.arr[i] + ', ';
      }
    }
    out += ']';
    return out;
  }
}

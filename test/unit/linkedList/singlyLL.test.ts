import { describe, expect, test } from '@jest/globals';
import { SinglyLinkedLisTailt } from '../../../src/linkedList/singlyLL';

const newLL = () => {
  const ll = new SinglyLinkedLisTailt<number>();

  ll.pushBack(1);
  ll.pushBack(2);
  ll.pushBack(3);
  ll.pushBack(4);
  ll.pushBack(5);
  ll.pushBack(6);
  return ll;
};

describe('Singly linked List Test', () => {
  test('Testing size', () => {
    const ll = newLL();
    expect(ll.size()).toBe(6);
  });

  test('Testing empty', () => {
    const ll = newLL();
    const l = new SinglyLinkedLisTailt<number>();
    expect(ll.empty()).toBe(false);
    expect(l.empty()).toBe(true);
  });

  test('Testing push front', () => {
    const ll = newLL();
    expect(ll.front()).toBe(1);
    ll.pushFront(9);

    expect(ll.front()).toBe(9);
  });

  test('Testing push back', () => {
    const ll = newLL();
    expect(ll.back()).toBe(6);
    ll.pushBack(9);
    expect(ll.back()).toBe(9);
  });

  test('Testing insert', () => {
    const ll = newLL();
    ll.insert(9, 3);
    expect(ll.valueAt(3)).toBe(9);
  });

  test('Testing erase', () => {
    const ll = newLL();
    ll.erase(2);
    expect(ll.valueAt(2)).toBe(4);
  });

  test('Testing value n from end', () => {
    const ll = newLL();
    expect(ll.valueNFromEnd(2)).toBe(5);
  });

  test('Testing reverse', () => {
    const ll = newLL();
    ll.reverse();
    expect(ll.front()).toBe(6);
  });

  test('Testing remove value', () => {
    const ll = newLL();
    ll.removeValue(6);
    expect(ll.valueAt(4)).toBe(5);
  });
});

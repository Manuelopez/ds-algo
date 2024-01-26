import { describe, expect, test } from '@jest/globals';
import { Vector } from '../../../src/arrays/vector';

const newVector = () => {
  const v = new Vector();
  v.push(1);
  v.push(2);
  v.push(3);
  v.push(4);
  v.push(5);
  v.push(6);
  return v;
};
describe('Vector Test', () => {
  test('Testing Size', () => {
    let v = newVector();
    expect(v.size()).toBe(6);
  });

  test('Testing capacity', () => {
    let v = newVector();
    expect(v.capacity()).toBe(16);
  });

  test('Testing is Empty', () => {
    let v = newVector();
    let vv = new Vector();

    expect(v.isEmpty()).toBe(false);
    expect(vv.isEmpty()).toBe(true);
  });

  test('Testing at index', () => {
    let v = newVector();
    expect(v.at(1)).toBe(2);
  });

  test('Testing push', () => {
    let v = newVector();
    v.push(7);
    expect(v.at(6)).toBe(7);
    expect(v.size()).toBe(7);
  });

  test('Testing insert', () => {
    let v = newVector();
    v.insert(7, 2);
    expect(v.at(2)).toBe(7);
    expect(v.size()).toBe(7);
  });

  test('Testing prepend', () => {
    let v = newVector();
    v.prepend(-1);
    expect(v.at(0)).toBe(-1);
    expect(v.size()).toBe(7);
  });

  test('Testing pop', () => {
    let v = newVector();
    const val = v.pop();
    expect(val).toBe(6);
    expect(v.size()).toBe(5);
  });

  test('Testing delete', () => {
    let v = newVector();
    v.delete(1);
    expect(v.size()).toBe(5);
  });

  test('Testing remove', () => {
    let v = newVector();
    v.push(1);
    v.push(1);
    v.push(1);
    v.push(1);
    v.push(1);
    v.push(1);
    v.remove(1);
    expect(v.size()).toBe(5);
  });

  test('Testing find', () => {
    let v = newVector();
    expect(v.find(1)).toBe(0);
  });
});

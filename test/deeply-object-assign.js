const assert = require('chai').assert
const deeplyObjectAssign = require('../');

describe('Checking the functionality of deeplyObjectAssign', () => {

  it('assigns new property with one level of depth', () => {
    const result = deeplyObjectAssign({ a: 3 }, { b: 5 });
    assert.deepEqual(result, { a: 3, b: 5 });
  });

  it('modifes existing property value with one level of depth', () => {
    const result = deeplyObjectAssign({ a: 3 }, { a: 4 }, { a: 5 });
    assert.deepEqual(result, { a: 5 });
  });

  it('writes an object value over a primitive value', () => {
    const result = deeplyObjectAssign({ a: 3 }, { a: { y: 4 } });
    assert.deepEqual(result, { a: { y: 4 } });
  });

  it('writes a primitive value over an object value', () => {
    const result = deeplyObjectAssign({ a: { x: 3 } }, { a: 4 });
    assert.deepEqual(result, { a: 4 });
  });

  it('assings new property with two level of depth', () => {
    const result = deeplyObjectAssign({ a: { x: 3 } }, { a: { y: 4 } });
    assert.deepEqual(result, { a: { x: 3, y: 4 } });
  });

  it('overwrites with two level of depth', () => {
    const result = deeplyObjectAssign({ a: { x: 3 } }, { a: { x: 4, y: 5 } });
    assert.deepEqual(result, { a: { x: 4, y: 5 } });
  });

  it('assings with n level of depth', () => {
    const result = deeplyObjectAssign(
      {
        a: {
          x: 3,
          y: {
            j: 'something',
            m: {
              id: 1001,
              v: 'some value'
            }
          }
        },
        c: {
          t: '2020'
        }
      },
      {
        a: {
          x: 4,
          y: {
            m: {
              v: 'new value'
            },
            n: 'another value'
          },
          z: {
            k: [1, 2, 3]
          }
        },
        b: true
      }
    );
    assert.deepEqual(result,
      {
        a: {
          x: 4,
          y: {
            j: 'something',
            m: {
              id: 1001,
              v: 'new value'
            },
            n: 'another value'
          },
          z: {
            k: [1, 2, 3]
          }
        },
        b: true,
        c: {
          t: '2020'
        }
      }
    );
  });

  it('assings n objects with n level of depth', () => {
    const result = deeplyObjectAssign(
      { a: { x: 3 }, c: { x: { y: { z: false, z2: true } } } },
      { b: { y: 5 } },
      { a: { x: 4, y: 7 } },
      { a: { x: 9 }, b: { x: 6 }, c: { x: { y: { z: true } } } }
    );
    assert.deepEqual(result,
      {
        a: {
          x: 9,
          y: 7
        },
        b: {
          x: 6,
          y: 5
        },
        c: {
          x: {
            y: {
              z: true,
              z2: true
            }
          }
        }
      }
    );
  });

  it('assings one object that should return itself', () => {
    const result = deeplyObjectAssign({ a: { x: 3 } });
    assert.deepEqual(result, { a: { x: 3 } });
  });

  it('assings an empty object that should return that empty object', () => {
    const result = deeplyObjectAssign({});
    assert.deepEqual(result, {});
  });

});

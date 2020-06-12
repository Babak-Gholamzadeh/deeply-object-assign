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

});

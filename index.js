const shallowAssign = Object.assign;

const deeplyObjectAssign = (...objects) =>
  objects.reduce((acc, obj) => {
    return shallowAssign(acc, obj);
  }, {});

module.exports = deeplyObjectAssign;



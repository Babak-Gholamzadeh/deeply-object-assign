const realTypeOf = require('realtypeof');

const deeplyObjectAssign = (...objects) =>
  objects.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      if(key.includes('__proto__') || key.includes('constructor') || key.includes('prototype')){
        return acc;
      }
      if (realTypeOf.isObject(acc[key]) && realTypeOf.isObject(obj[key]))
        return deeplyObjectAssign(acc[key], obj[key]);
      acc[key] = obj[key];
    });
    return acc;
  });

module.exports = deeplyObjectAssign;



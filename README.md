# Deeply Object Assign

A function which acts like `Object.assign` method but recursively (with N levels of depth).

## Installation

```bash
$ npm install deeply-object-assign
```

## Usage

```javascript
const deeplyObjectAssign = require('deeply-object-assign');

// Assing N objects deeply
const result = deeplyObjectAssign(
  {a: { x: 3, y: { m: 4} } },
  {a: { x: 4, y: { m: 5, n: 6 } } },
  {a: { z: 7 }},
  {a: { x: 6, y: { n: 8 } },
);
// result: {a: { x: 6, y: { m: 5, n: 8 }, z: 7 }
```


const test = require('tape');
const sum = require('../public/js/functions.js').sum;
test("Sum function", (t)=>  {
  let result = 22;
  t.equal(sum(10,12), result, "Should sum numbers properly");
  t.end();
});

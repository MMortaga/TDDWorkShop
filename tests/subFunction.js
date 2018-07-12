const test = require('tape');
const sum = require('../public/js/functions.js').sub;
test("Substraction function", (t)=>  {
  let result = 5;
  t.equal(sub(10,5), result, "Should substract numbers properly");
  t.end();
});

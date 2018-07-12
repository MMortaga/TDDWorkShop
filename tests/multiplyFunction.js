const test = require('tape');
const multiply = require('../public/js/functions.js').multiply;
test("Multiply function", (t)=>  {
  let result = 20;
  t.equal(multiply(10,2), result, "Should multiply numbers properly");
  t.end();
});

const test = require('tape');
const request = require('supertest');
const app = require('../src/app');
const functions = require('../public/js/functions.js');
const sum = functions.sum;
const sub = functions.sub;
const multiply = functions.multiply;

test('Homepage', (t)=>{
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      if(err){
        t.error(err)
      }else{
        t.equal(200, res.status, 'homepage loaded successfully')
        t.end();
      }
    });
});

test('Error page', (t)=>{
  request(app)
    .get('/potato')
    .expect(404)
    .end((err, res) => {
      if(err){
        t.error(err)
      }else{
        t.equal(404, res.status, 'Error page loaded successfully')
        t.end();
      }
    });
});

test("Sum function", (t)=>  {
  let result = 22;
  t.equal(sum(10,12), result, "Should sum numbers properly");
  t.end();
});


test("Substraction function", (t)=>  {
  let result = 5;
  t.equal(sub(10,5), result, "Should substract numbers properly");
  t.end();
});


test("Multiply function", (t)=>  {
  let result = 20;
  t.equal(multiply(10,2), result, "Should multiply numbers properly");
  t.end();
});


test("All functions", (t)=>  {
  let result = 4;
  t.equal(sum(sub(4,2),multiply(2,1)), result, "Should return 2+2");
  t.end();
});

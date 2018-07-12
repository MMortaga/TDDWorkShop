const test = require('tape');
const shot = require('shot');
const router = require('./router');


test("Initialize", (t)=>  {
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end();
});

test('blog router',(t)=>{
  shot.inject(router,{method:'get',url:'/blog'} ,(res)=>{
    t.equal(res.statusCode,200,'should nreturn 200');
    var response =JSON.parse(res.payload);
    console.log(response);
    t.equal(response.length,3,'should 3')
    t.end();
  })
})

test('Exercise 1 Homepage', (t)=> {
  shot.inject(router,{method:"get", url:"/"}, (res)=>{
    t.equal(res.statusCode, 200, "Should respond with statusCode of 200");
    t.equal(res.payload, "Hello", "Should return \"Hello\" in the payload :D");
    t.end();
  });
});

test("Unknown Pages", (t)=>{
  shot.inject(router, {method:"get", url:"/elephant"}, res=>{
    t.equal(res.payload, "Unknown URL", "Should handle unknown pages.");
    t.end();
  });
});


test("Exercise 2 (Blog #1)", t=>{
  shot.inject(router, {method:"get", url:"/blog"}, res=>{
    t.equal(res.statusCode, 200, 'should respond with status code of 200');
    let array = JSON.parse(res.payload);
    console.log(array);
    let length= array.length;
    t.equal(length, 3, 'should return an array with 3 items');
    t.equal(typeof array[0], "string", "Should contain 3 strings")
    t.equal(typeof array[1], "string", "Should contain 3 strings")
    t.equal(typeof array[2], "string", "Should contain 3 strings")
  })

t.end();
})

test("Exercise 3 (Blog #2)", t=>{
  shot.inject(router, {method:"post", url:"/blog"}, res=>{
    t.equal(res.statusCode, 200, "Should respond with a status code of 200 :D");
    let obj = JSON.parse(res.payload);
    console.log("THE OBJECT IS:" , obj);
    t.equal(obj.hasOwnProperty("password"), true, "should have a key of \"password\"")
    let key = obj.password;
    t.equal(key, "potato", "should have a value of \"potato\"")
  })

t.end();
})

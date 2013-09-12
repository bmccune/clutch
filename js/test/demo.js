var test = require('tape');
var myCode = require('../my_code.js');

test('make sure my code works', function (t) {
  t.plan(2);
  t.equal(myCode.beep(5), 555);
  
  myCode.boop(333, function (n) {
    t.equal(n, 3);
  });
});
const assert = require ('chai').assert;
const loginUser = require ('./routes/routes');

//test failed to recognize the function because of imports outside the module
describe ('LogIn', function () {
  it ('should return a object with id token', function () {
    assert.equal (loginUser (), Object);
  });
});

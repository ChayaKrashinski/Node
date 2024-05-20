const addCustomer = require('./customers');

test('send with less params', () => {
  expect(addCustomer(1, "sari")).toBe({"id":1, "name":sari, "phone":"0556-74101"});
});
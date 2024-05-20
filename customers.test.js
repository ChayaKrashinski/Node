const addCustomer = require('./customers');


test('add customer - send with less params', () => {
  expect(() => { addCustomer(1, "sari") })
    .toThrow();
});

// test('add customer - send with invalid params', () => {
//   expect(() => { addCustomer("1", "sari", "9797852") })
//     .toThrow(
//       "type of id can be only number");
// });

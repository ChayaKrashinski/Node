const {borrowBook, returnBook} = require('./borrows')

// test("borrow book - valid state", () =>{
//     expect(borrowBook(2, 2)).toBe(true)
// })

// test("borrow book - invalid book", () =>{
//     expect(borrowBook(2, 2)).toBe(false)
// })

// test("borrow book - A borrowed book", () =>{
//     expect(borrowBook(1, 2)).toBe(false)
// })

// test("borrow book - A customer who has already borrowed 2 books", () =>{
//     expect(borrowBook(2, 3)).toBe(false)
// })

test("return book - valid state", () => {
    expect(returnBook(1, 2)).toBe(true)
})

test("return book - invalid state", () => {
    expect(returnBook(1, 1)).toBe(false)
})
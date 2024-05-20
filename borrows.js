customers = [{ "id": 1, "name": "chaya", "phone": "02", "books": [] },
{ "id": 2, "name": "mira", "phone": "03", books: [{ "id": 1 }] },
{ "id": 3, "name": "sara", "phone": "04", books: [{ "id": 1 }, { "id": 3 }] }
]
books = [{ "id": 1, "name": "Ishay Children1", "borrow": true },
{ "id": 2, "name": "Ishay Children2", "borrow": false },
{ "id": 3, "name": "Ishay Children3", "borrow": true },

]

const borrowBook = (bookId, customerId) => {
    for (let index = 0; index < books.length; index++) {
        const book = books[index];
        if (bookId === book.id && book.borrow == false) {
            for (let j = 0; j < customers.length; j++) {
                const customer = customers[j];
                if (customer.id === customerId && customer.books.length < 2) {
                    //do borrow
                    customer.books.push({ "id": book.id })
                    book.borrow = true;
                    return true;
                }

            }
        }
    }
    return false;
}

const returnBook = (bookId, customerId) => {
    for (let index = 0; index < books.length; index++) {
        const book = books[index];
        if (bookId === book.id && book.borrow == true) {
            for (let j = 0; j < customers.length; j++) {
                const customer = customers[j];
                if (customer.id === customerId && customer.books.find(b=>b.id==bookId)) {
                    //do return
                    customer.books=customer.books.filter(b=>b.id!=bookId)
                    book.borrow = false;
                    return true;
                }

            }
        }
    }
    return false;
}

module.exports = {borrowBook, returnBook};
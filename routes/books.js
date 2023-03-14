var express = require('express');
var router = express.Router();
const cors = require('cors');
router.use(cors());

const books = [
  {
    id: 1,
    title: 'Pippi Långstrump',
    author: 'Astrid Lindgren',
    pages: 200,
    isAvalibale: true,
  },
  {
    id: 2,
    title: 'Alfons i rymden',
    author: 'Aston Lundgren',
    pages: 2,
    isAvalibale: true,
  },
  {
    id: 3,
    title: 'Lotta i Gotham city',
    author: 'Bert Bertsson',
    pages: 678,
    isAvalibale: true,
  },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(books);
});

router.get('/:bookId', function (req, res, next) {
  bookId = req.params.bookId;
  console.log(bookId);

  let findBook = books.find((book) => book.id == bookId);

  res.json(findBook);
});

router.put('/toggle/:bookId', function (req, res, next) {
  bookId = req.params.bookId;

  let findBook = books.find((book) => book.id == bookId);

  if (findBook) {
    findBook.isAvalibale = !findBook.isAvalibale;
    console.log(findBook);
    res.json({ isAvalibale: findBook.isAvalibale });
  } else {
    res.status(401).json('Book not found');
  }
});

router.post('/newbook', function (req, res, next) {
  let newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);

  res.json(books);
});

module.exports = router;

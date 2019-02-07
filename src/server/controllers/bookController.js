// Book Model
const Book = require("../schema/schemaBook.js");

// @route   GET books
// @desc    get All books
// @access  Public
const show = (req, res) => {
    Book.find()
        .sort({title: 1})
        .then(books => res.json(books));
};

// @route   POST book
// @desc    Create A book
// @access  Admin
const create = (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        language: req.body.language,
        summary: req.body.summary,
        owner: req.body.owner,
        isBook: req.body.isBook,
        isEbook: req.body.isEbook,
    });

    newBook
        .save()
        .then(book => res.json(book))
        .catch(err => res.status(400).send(err));
};

// @route   PUT book/:id
// @desc    Update A book
// @access  Admin
const store = (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.update().save())
        .then(book => res.json(book))
        .catch(err => res.status(400).send(err));
};

// @route   DELETE book/:id
// @desc    Delete A book
// @access  Admin
const destroy = (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json(err));
};

// Exports des fonctions
exports.show = show;
exports.create = create;
exports.store = store;
exports.destroy = destroy;

const userController = require("./controllers/userController.js");
// const bookController = require("./controllers/bookController.js");
// const loanController = require("./controllers/loanController.js");
// const reviewController = require("./controllers/reviewController.js");
// const tagController = require("./controllers/tagController.js");

module.exports = function(app) {
    // user
    app.post("/login", userController.login);
    app.post("/create", userController.create);
    // app.post("/store", userController.store);
    // app.post("/destroy", userController.destroy);
    // book

    // loan

    // tag
};

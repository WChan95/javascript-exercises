const getTheTitles = function(books) {
    let justTitles = books.map(book => book.title);
    return justTitles;
}

module.exports = getTheTitles;

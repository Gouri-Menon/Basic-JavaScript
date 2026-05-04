//Create an object book with title, author, year, and pages. Log the title using bracket notation with a variable key.
//Add a method summary() that returns "<title> by <author> (<year>)" using template literals and this

const book = {
    title : "A Thousand Splendid Suns",
    author : "Khaled Hosseini",
    year : 2007,
    pages : 384,

    summary(){
        return `${this.title} by ${this.author} ${(this.year)}`;
    }
}
const key = "title";
console.log(book[key]);

console.log(book.summary());


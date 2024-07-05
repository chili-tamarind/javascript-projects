// One class should be a Book class and two child classes of the Book class called Manual and Novel

// Define your Book class here:
	
class Book {
    
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }

    checkout(uses=1) {
        this.timesCheckedOut += uses;
    }
}

// Each class will contain two methods. One will be a constructor. The other one will either be in charge of disposal of the book or updating the property related to the number of times a book has been checked out. 

// Define your Manual and Novel classes here:

class Manual extends Book {
    
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }

    // For a manual, the book must be thrown out if it is over 5 years old
    dispose(currentYear){
        if (currentYear-this.copyright > 5) {
            this.discarded = 'Yes';}
        }
}

class Novel extends Book {
    
    constructor(title, author, copyright, isbn, pages, 
    
    timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    
   // For a novel, the book should be thrown out if it has been checked out over 100 times.
    dispose(){
        if (this.timesCheckedOut > 100) {
            this.discarded = 'Yes';}
    }
}

// Declare the objects for exercises 2 and 3 here:

// constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded)

let pride = new Novel ('Pride and Prejudice', '	Jane Austen', 1813, '1111111111111', 432, 32, 'No');

let secrets = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');


// Code exercises 4 & 5 here:

pride.checkout(500);
console.log(`\nDiscard ${pride.title}? : ${pride.discarded}`);

secrets.dispose();
console.log(`\nDiscard ${secrets.title}? : ${secrets.discarded}`);
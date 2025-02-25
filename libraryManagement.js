class Book {
    #title;
    #author;
    #isAvailable;
  
    constructor(title, author) {
      this.#title = title;
      this.#author = author;
      this.#isAvailable = true; 
    }
  
    getTitle() {
      return this.#title;
    }
  
    getAuthor() {
      return this.#author;
    }
  
    isAvailable() {
      return this.#isAvailable;
    }
  
    checkoutBook() {
      if (this.#isAvailable) {
        this.#isAvailable = false;
        console.log(`Ви взяли книгу "${this.#title}" автора ${this.#author}`);
      } else {
        console.log(`Вибачте, книга "${this.#title}" недоступна.`);
      }
    }
  }
  
  class Library {
    constructor() {
      this.books = []; 
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    checkoutBook(title) {
      const book = this.books.find(b => b.getTitle() === title);
      if (book) {
        book.checkoutBook();
      } else {
        console.log(`Книга з назвою "${title}" не знайдена.`);
      }
    }
  
    viewAvailableBooks() {
      const availableBooks = this.books.filter(book => book.isAvailable());
      if (availableBooks.length > 0) {
        console.log("Доступні книги:");
        availableBooks.forEach(book => {
          console.log(`- "${book.getTitle()}" автора ${book.getAuthor()}`);
        });
      } else {
        console.log("Немає доступних книг.");
      }
    }
  }
  
  // Приклад використання
  const myLibrary = new Library();
  const book1 = new Book("Контопська Відьма", "Григорій Квітка-Основ'яненко");
  const book2 = new Book("1984", "Джордж Орвелл");
  const book3 = new Book("Великий Гетсбі", "Ф. Скотт Фіцджеральд");
  
  myLibrary.addBook(book1);
  myLibrary.addBook(book2);
  myLibrary.addBook(book3);
  
  myLibrary.viewAvailableBooks(); 
  myLibrary.checkoutBook("1984"); 
  myLibrary.viewAvailableBooks(); 
  myLibrary.checkoutBook("1984"); 
  
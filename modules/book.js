import Element from './element.js';

const elementObject1 = new Element();

export default class Books {
  constructor() {
    this.bookList = [];
  }

  addBooks = () => {
    const book = {
      title: elementObject1.titleInput.value,
      author: elementObject1.authorInput.value,
    };
    this.bookList.push(book);
    let rd = JSON.parse(localStorage.getItem('bookInfo'));
    if (rd) {
      rd.push(book);
    } else {
      rd = [];
      rd.push(book);
    }
    const booksString = JSON.stringify(rd);
    localStorage.setItem('bookInfo', booksString);
    this.retrieveData();
  }

  removeItem = (bookTitle) => {
    let bookList = JSON.parse(localStorage.getItem('bookInfo'));
    bookList = bookList.filter((element) => element.title !== bookTitle);
    const string = JSON.stringify(bookList);
    localStorage.setItem('bookInfo', string);
    window.location.reload();
  }

  retrieveData = () => {
    const data = JSON.parse(localStorage.getItem('bookInfo'));
    if (data) {
      const table = document.querySelector('.table');
      let bookData = '';
      data.forEach((element) => {
        const generatedContent = `
          <tr>
          <td>"${element.title}" by ${element.author} </td>
          <td><button data-index='${element.title}'>Remove</button></td>
          </tr>
          `;
        bookData += generatedContent;
      });
      table.innerHTML = bookData;
    }
  }
}

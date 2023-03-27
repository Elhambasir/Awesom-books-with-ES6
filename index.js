import Element from './modules/element.js';
import Book from './modules/book.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const bookObject1 = new Book();
const elementObject1 = new Element();
window.reload = bookObject1.retrieveData();
elementObject1.addBtn.addEventListener('click', () => {
  if (elementObject1.titleInput.value && elementObject1.authorInput.value) {
    bookObject1.addBooks();
  }
});

elementObject1.bookList.classList.add('show');

elementObject1.btnList.addEventListener('click', () => {
  bookObject1.retrieveData();
  elementObject1.bookList.classList.add('show');
  elementObject1.contact.classList.remove('show');
  elementObject1.addToList.classList.remove('show');
});
elementObject1.btnAddNew.addEventListener('click', () => {
  elementObject1.addToList.classList.add('show');
  elementObject1.bookList.classList.remove('show');
  elementObject1.contact.classList.remove('show');
});
elementObject1.btnContact.addEventListener('click', () => {
  elementObject1.contact.classList.add('show');
  elementObject1.bookList.classList.remove('show');
  elementObject1.addToList.classList.remove('show');
});
elementObject1.removeButton.addEventListener('click', (e) => {
  const bookIndex = e.target.dataset.index;
  bookObject1.removeItem(bookIndex);
});

let dt = DateTime.now();
dt = dt.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS);
document.querySelector('#date').innerHTML = dt;

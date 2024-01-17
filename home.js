const libreria = function () {
  fetch('https://striveschool-api.herokuapp.com/books')
  .then((response) => {
    console.log('response', response);
    if (response.ok) {
      return response.json();
    } else {
      if (response.status === 404) {
        throw new Error('404 - Pagina non trovata');
      } else if (response.status === 500) {
        throw new Error('500 - Internal server error');
      } else {
        throw new Error('Errore generico');
      }
    }
  });
  .then((books) => {
  const rowContainer = document.getElementsByClassName('row')[0];
  const bookList = document.getElementById('listaLibri');

  books.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('col');
    card.innerHTML = `
        <div class="card">
          <img src="${book.img}" class="card-img-top" alt="${book.title}">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Prezzo: ${book.price}$</p>
            <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
          </div>
        </div>
      `;

    bookList.appendChild(card);
  });
});
.catch((err) => {
  console.log("ERRORE!", err);
});

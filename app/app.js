if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log(`Service Worker registered! Scope: ${registration.scope}`);
      })
      .catch(err => {
        console.log(`Service Worker registration failed: ${err}`);
      });
  });
}

function generateCard(title, slug, added, img) {
  const card = document.createElement('div');
  card.className = 'card';
  const image = document.createElement('img');
  card.appendChild(image);
  image.src = img;
  image.className = 'card-img-top';
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  card.appendChild(cardBody);
  const articleTitle = document.createElement('h5');
  articleTitle.innerHTML = title;
  articleTitle.className = 'card-title';
  const articleSlug = document.createElement('p');
  articleSlug.innerHTML = slug;
  articleSlug.className = 'card-text';
  cardBody.appendChild(articleTitle);
  cardBody.appendChild(articleSlug);
  const footer = document.createElement('div');
  footer.className = 'card-footer';
  const smallFooterText = document.createElement('small');
  smallFooterText.innerHTML = `${added === 1 ? `${added} hour ago` : `${added} hours ago`}`;
  smallFooterText.className = 'text-muted';
  card.appendChild(footer);
  footer.appendChild(smallFooterText);
  return card;
}

fetch('/api/news').then(response => response.json()).then(news => {
  news.forEach(n => {
    const today = new Date();
    const added = new Date(n.added);
    const difference = parseInt((today - added) / (1000 * 3600));
    const card = generateCard(n.title, n.slug, difference, n.image);
    const cardDeck = document.querySelector('.card-deck');
    cardDeck.appendChild(card);    
  });
});
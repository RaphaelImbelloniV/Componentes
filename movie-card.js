// MovieCard component - creates a card element for an item (image, title, meta)
// Usage:
// import { MovieCard } from './movie-card.js'
// const card = MovieCard({ id, image, title, meta }, onClick)
export function MovieCard({ id = '', image = '', title = '', meta = '' } = {}, onClick) {
    const item = document.createElement('div');
    item.classList.add('rc-movie-card');
    if (id) item.dataset.id = id;

    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('rc-movie-card__poster');
    const img = document.createElement('img');
    img.src = image || './assets/img/no-poster.png';
    img.alt = title ? `${title} Poster` : 'Poster';
    img.loading = 'lazy';
    imgWrapper.appendChild(img);

    const info = document.createElement('div');
    info.classList.add('rc-movie-card__info');
    const h3 = document.createElement('h3');
    h3.classList.add('rc-movie-card__title');
    h3.textContent = title || '';
    const p = document.createElement('p');
    p.classList.add('rc-movie-card__meta');
    p.textContent = meta || '';

    info.append(h3, p);
    item.append(imgWrapper, info);

    if (typeof onClick === 'function') {
        item.addEventListener('click', (e) => onClick(e, { id, title, image, meta }));
    }

    return item;
}

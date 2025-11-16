// MovieDetails (DetailsDrawer) - drawer lateral para exibir dados completos
// Usage:
// import { MovieDetails } from './movie-details.js'
// const drawer = MovieDetails();
// document.body.appendChild(drawer.element);
// drawer.open({ title, poster, fields: [{label, value}] });
export function MovieDetails() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('rc-details');

    wrapper.open = function({ title = '', poster = '', fields = [] } = {}) {
        wrapper.innerHTML = `
            <button class="rc-details__close" aria-label="Fechar">×</button>
            <div class="rc-details__content">
                <div class="rc-details__poster"><img src="${poster || './assets/img/no-poster.png'}" alt="${title}"></div>
                <div class="rc-details__info">
                    <h2 class="rc-details__title">${title}</h2>
                    ${fields.map(f => `<p class="rc-details__field"><strong>${f.label}</strong> ${f.value}</p>`).join('')}
                </div>
            </div>
        `;
        const btn = wrapper.querySelector('.rc-details__close');
        btn.addEventListener('click', () => wrapper.close());
        wrapper.classList.add('--open');
    };

    wrapper.close = function() {
        wrapper.classList.remove('--open');
        wrapper.innerHTML = '';
    };

    wrapper.toggle = function() {
        if (wrapper.classList.contains('--open')) wrapper.close(); else wrapper.open();
    };

    // Expose element for direct append
    return { element: wrapper, open: wrapper.open, close: wrapper.close, toggle: wrapper.toggle };
}

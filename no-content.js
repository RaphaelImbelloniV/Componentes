// NoContent placeholder component
export function NoContent(message = 'Nenhum resultado encontrado.') {
    const el = document.createElement('div');
    el.classList.add('rc-no-content');
    el.innerHTML = `<p class="rc-no-content__msg">${message}</p>`;
    return el;
}

# MovieCard
Componente que gera um card para representar um item (filme / mídia).

## Arquivos
- `movie-card.js` - função `MovieCard(props, onClick)` que retorna um elemento DOM.
- `movie-card.css` - estilos mínimos e variáveis CSS utilizadas.

## Uso
Importe o JS e o CSS no seu projeto:

```html
<link rel="stylesheet" href="movie-card.css">
<script type="module">
  import { MovieCard } from './movie-card.js';
  const root = document.getElementById('list');
  const card = MovieCard({ id: 'tt0123456', image: 'poster.jpg', title: 'Título', meta: '2020' }, (e, data) => {
    console.log('clicou', data);
  });
  root.appendChild(card);
</script>
```

## Observações
- Usa a variável CSS `--rc-poster-height` para ajustar a altura do poster.
- O componente retorna um elemento DOM (não usa framework).

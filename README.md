# MovieDetails (DetailsDrawer)
Drawer lateral / modal para exibir informações detalhadas de um item.

## Arquivos
- `movie-details.js` - fábrica `MovieDetails()` que retorna um objeto com `{ element, open, close, toggle }`.
- `movie-details.css` - estilos do drawer.

## Uso
```html
<link rel="stylesheet" href="movie-details.css">
<script type="module">
  import { MovieDetails } from './movie-details.js';
  const drawer = MovieDetails();
  document.body.appendChild(drawer.element);
  drawer.open({
    title: 'Nome do filme',
    poster: 'poster.jpg',
    fields: [{label:'Ano:', value:'2020'}, {label:'Gênero:', value:'Ação'}]
  });
</script>
```

## Observações
- O componente assume que será anexado ao `document.body`.
- Não faz chamadas à API — apenas renderiza conteúdo fornecido.

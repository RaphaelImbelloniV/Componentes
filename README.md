# Grid Auto Resize
Utilitário que calcula a quantidade de colunas baseada na largura do container.

## Arquivos
- `grid-auto-resize.js` - exporta `autoGrid(container, cardMinWidth)`.
- `grid-auto-resize.css` - estilos básicos para grid que usa a variável `--rc-grid-columns`.

## Uso
```js
import { autoGrid } from './grid-auto-resize.js';
const list = document.getElementById('result-wrapper');
autoGrid(list, 200);
window.addEventListener('resize', () => autoGrid(list, 200));
```

# Loader (Global)
Utilitário simples para controlar um estado de carregamento global via `body.rc-loading`.

## Arquivos
- `loader.js` - objeto `Loader` com `start()`, `stop()` e `toggle()`.
- `loader.css` - estilos e um elemento `.rc-global-loader` que aparece quando `body.rc-loading` está ativo.

## Uso
Adicione o elemento visual do loader no seu HTML, por exemplo:
```html
<div class="rc-global-loader"></div>
```
E controle via:
```js
import { Loader } from './loader.js';
Loader.start(); // exibe
Loader.stop();  // oculta
```

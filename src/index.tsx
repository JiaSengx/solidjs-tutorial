/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { Route, Router } from '@solidjs/router';
import { Home, Cart, Product } from './pages';
import { CartContextProvider } from './Context';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <div>
      <CartContextProvider>
        <App></App>

        <Router>
          <Route path="/" component={Home}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/product/:id" component={Product}></Route>
        </Router>
      </CartContextProvider>
    </div>
  ),
  root!,
);

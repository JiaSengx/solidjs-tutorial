import { createSignal, type Component } from 'solid-js';

import logo from './assets/logo.svg';
import style from './App.module.css';
import { useCart } from './Context';

const App: Component = () => {
  const [isDarkTheme, setIsDarkTheme] = createSignal(false);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  const { items } = useCart();

  const quantity = () => items.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <div>
      <header
        classList={{
          [style.darkTheme]: isDarkTheme(),
        }}>
        <span onClick={toggleTheme}>change theme</span>

        <nav class={style.nav}>
          <a href="/">Home</a>
          <a href="/cart">Cart ({quantity()})</a>
        </nav>

        <h1>Ninja March</h1>
      </header>

      <img src={logo} alt="My Logo" class={style.logo} />
    </div>
  );
};

export default App;

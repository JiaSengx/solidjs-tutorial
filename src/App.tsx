import { createSignal, type Component } from 'solid-js';

import logo from './assets/logo.svg';
import style from './App.module.css';

const App: Component = () => {
  const [isDarkTheme, setIsDarkTheme] = createSignal(false);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <div>
      <header
        classList={{
          [style.darkTheme]: isDarkTheme(),
        }}>
        <span onClick={toggleTheme}>change theme</span>

        <nav class={style.nav}>
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
        </nav>

        <h1>Ninja March</h1>
      </header>

      <img src={logo} alt="My Logo" class={style.logo} />
    </div>
  );
};

export default App;

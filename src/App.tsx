import type { Component } from 'solid-js';
import { Card } from './shared/components';

import logo from './assets/logo.svg';
import style from './App.module.css';

const App: Component = () => {
  return (
    <div>
      <header>
        <h1>Ninja March</h1>
      </header>

      <img src={logo} alt="My Logo" class={style.logo} />

      <Card></Card>
    </div>
  );
};

export default App;

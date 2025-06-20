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

      <section class={style.cardContainer}>
        {/* <Card title="t1"></Card> */}
        <Card title="t2" rounded={true}>
          <h2>projection content</h2>
          <p>info content</p>

          <p data-title>This is title</p>
          <p data-content>This is content</p>
          <button class={style.test} data-button>
            Click
          </button>
        </Card>

        <Card title="t3" rounded={false}>
          <h2>projection content</h2>
          <p>info content</p>

          <p data-title>This is title</p>
          <p data-content>This is content</p>
          <button data-button>Click</button>
        </Card>
      </section>
    </div>
  );
};

export default App;

import { Component } from 'solid-js';
import { CardType } from './Card.type';

import style from './Card.module.css';

export const Card: Component<CardType> = prop => {
  return (
    <div
      class={style.card}
      classList={{
        [style.test]: prop.rounded,
      }}>
      <h2>{prop.title}</h2>
      <p>Card info detail</p>
      <button class="btn">Click Me!</button>

      {prop.children}
    </div>
  );
};

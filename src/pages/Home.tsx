import { createEffect, createResource, For, Show } from 'solid-js';
import { Card } from '../shared/components';

import style from './Home.module.css';

// const fetchProducts = async (): Promise<Product[]> => {
//   const res = await fetch('http://localhost:4000/products');

//   return res.json();
// };

const [products] = createResource(async (): Promise<Product[]> => {
  const res = await fetch('http://localhost:4000/products');

  return res.json();
});

export const Home = () => {
  // const [products] = createResource(fetchProducts);

  createEffect(() => {
    console.log('Products updated:', products(), 'Loading:', products.loading);
  });

  return (
    <section class={style.cardContainer}>
      <Show when={products()} fallback={<p>Loading...</p>}>
        <For each={products()}>
          {product => (
            <Card rounded={true} title={product.title} description={product.description}>
              <img src={product.img} alt="image" class={style.img} />

              <a href={'/product/' + product.id}>View Product</a>
            </Card>
          )}
        </For>
      </Show>
    </section>
  );
};

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
}

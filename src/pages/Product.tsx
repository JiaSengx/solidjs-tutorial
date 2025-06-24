import { useParams } from '@solidjs/router';
import { createResource, Show } from 'solid-js';

const fetchProduct = (id: string) =>
  createResource(async (): Promise<Product> => {
    const res = await fetch(`http://localhost:4000/products/${id}`);

    return res.json();
  });

export const Product = () => {
  const params = useParams<{ id: string }>();
  const [product] = fetchProduct(params.id);

  return (
    <div>
      <Show when={product()} fallback={<p>Loading...</p>}>
        <img src={product()?.img}></img>
        <p>Product - {product()?.title}</p>
        <p>Product Detail - {product()?.description}</p>
        <p>Price - {product()?.price}</p>
      </Show>
    </div>
  );
};

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
}

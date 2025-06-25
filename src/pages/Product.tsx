import { useParams } from '@solidjs/router';
import { createResource, createSignal, Show } from 'solid-js';
import { useCart } from '../Context';

const fetchProduct = (id: string) =>
  createResource(async (): Promise<Product> => {
    const res = await fetch(`http://localhost:4000/products/${id}`);

    return res.json();
  });

export const Product = () => {
  const params = useParams<{ id: string }>();
  const [product] = fetchProduct(params.id);

  const { items, setItems } = useCart();

  const [adding, setAdding] = createSignal(false);

  const addproduct = () => {
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
    }, 2000);

    const exists = items.find(p => p.id === product()?.id);

    setItems(prev =>
      exists
        ? prev.map(p => (p.id === product()?.id ? { ...p, quantity: p.quantity + 1 } : p))
        : [...items, { ...product()!, quantity: 1 }],
    );
  };

  return (
    <div>
      <Show when={product()} fallback={<p>Loading...</p>}>
        <img src={product()?.img}></img>
        <p>Product - {product()?.title}</p>
        <p>Product Detail - {product()?.description}</p>
        <p>Price - {product()?.price}</p>

        <button onclick={addproduct} disabled={adding()}>
          Add to Cart
        </button>
      </Show>

      <Show when={adding()}>
        <div>{product()?.title} was added to the cart</div>
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

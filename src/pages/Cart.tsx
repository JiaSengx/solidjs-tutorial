import { For, useContext } from 'solid-js';
import { Card } from '../shared/components';
import { useCart } from '../Context';

export const Cart = () => {
  const { items, setItems } = useCart();

  return (
    <div>
      <Card title="Cart" rounded={true}>
        <h2>Your Shopping Cart</h2>

        <For each={items}>
          {item => (
            <p>
              {item.title} - ${item.price} x {item.quantity}
            </p>
          )}
        </For>
      </Card>
    </div>
  );
};

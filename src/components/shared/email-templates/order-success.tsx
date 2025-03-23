
import React from 'react';
import { CartItemDTO } from '../../../../services/dto/cart.dto';

interface Props {
  orderId: number;
  items: CartItemDTO[];
}

export const OrderSuccessTemplate: React.FC<Props> = ({ orderId, items }) => (
  <div>
    <h1>Thank you! 🎉</h1>

    <p>Your order #${orderId} successfully payment. List of items:</p>

    <hr />

    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.productItem.product.name} | {item.productItem.price} $ x {item.quantity} p. ={' '}
          {item.productItem.price * item.quantity} $
        </li>
      ))}
    </ul>
  </div>
);

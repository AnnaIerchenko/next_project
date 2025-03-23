import React from "react";

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({orderId, totalAmount, paymentUrl}) => (
  <div>
    <h1>Order #{orderId}</h1>
    <p>Pay order at amount <b>${totalAmount}$</b>. Go <a href={paymentUrl}>to this link</a>for pay your order</p>
  </div>
)
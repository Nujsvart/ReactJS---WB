import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((acc, i) => {
      const fish = this.props.fishes[i];
      const count = this.props.order[i];
      const isAvailable = fish && fish.status === "available";

      if (isAvailable) {
        return acc + count * fish.price;
      }

      return acc;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul>
          {orderIds.map(key => (
            <li>{key}</li>
          ))}
        </ul>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;

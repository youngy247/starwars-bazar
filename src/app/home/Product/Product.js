import { ToastNotification } from '@carbon/react';
import React, { useState } from 'react';

export default function Starship({ starship }) {
  const [quantity, setQuantity] = useState(1);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToBasket = () => {
    setToastMessage(`Added ${quantity} ${starship.name}(s) to your basket`);
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  console.log(starship);

  return (
    <section className={'starship'}>
      <h1>{starship.name}</h1>
      <p>
        <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}
      </p>
      <p>
        <strong>Passengers:</strong> {starship.passengers}
      </p>

      <p>
        <strong>Cost In Credits:</strong> {starship.cost_in_credits}
      </p>

      <p>
        <strong>Manufacturer:</strong> {starship.manufacturer}
      </p>

      <p>
        <strong>Model:</strong> {starship.model}
      </p>

      <p>
        <strong>Created At:</strong>{' '}
        {new Date(starship.created).toLocaleDateString()}
      </p>

      <div className={'quantity-container'}>
        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1}
          className="minus">
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <button onClick={handleAddToBasket} className={'buy-button'}>
        BUY
      </button>

      {toastVisible && (
        <ToastNotification
          role="status"
          kind="success"
          timeout={3000}
          subtitle={toastMessage}
          title="Success"
          caption="View your basket"
          className={'toast-notification'}
        />
      )}
    </section>
  );
}

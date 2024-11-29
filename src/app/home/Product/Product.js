import { Add, Subtract } from '@carbon/icons-react';
import { Button, ToastNotification } from '@carbon/react';
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
        <div className={'quantity-value-container'}>
          <Button
            renderIcon={Subtract}
            hasIconOnly
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity <= 1}
            size="sm"
            kind="secondary"></Button>
          <span>{quantity}</span>
          <Button
            onClick={() => setQuantity(quantity + 1)}
            hasIconOnly
            renderIcon={Add}
            size="sm"
            kind='secondary'
            title="Add to selection"
          />
        </div>
        <Button onClick={handleAddToBasket} size="lg" kind="primary">
          BUY
        </Button>
      </div>

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

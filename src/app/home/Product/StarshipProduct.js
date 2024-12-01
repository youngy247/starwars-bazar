import useAddToBasket from '@/hooks/useAddToBasket';
import { Add, Subtract } from '@carbon/icons-react';
import { Button, ToastNotification } from '@carbon/react';
import React, { useState } from 'react';

export default function StarshipProduct({ starship }) {
  const [quantity, setQuantity] = useState(1);
  const { toastVisible, toastMessage, addToBasket } = useAddToBasket();

  const handleAddToBasket = () => {
    addToBasket(quantity, starship.name);
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
            kind="secondary"
            title={`Decrease quantity of ${starship.name} to quantity of ${
              quantity - 1
            }`}
            iconDescription={`Decrease quantity of ${
              starship.name
            } to quantity of ${quantity - 1}`}></Button>
          <span>{quantity}</span>
          <Button
            onClick={() => setQuantity(quantity + 1)}
            hasIconOnly
            renderIcon={Add}
            size="sm"
            kind="secondary"
            title={`Increase quantity of ${starship.name} to quantity of ${
              quantity + 1
            }`}
            iconDescription={`Increase quantity of ${
              starship.name
            } to quantity of ${quantity + 1}`}
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

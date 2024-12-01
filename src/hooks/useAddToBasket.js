import { useState } from 'react';

function useAddToBasket() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const addToBasket = (quantity, productName) => {
    setToastMessage(`Added ${quantity} ${productName}(s) to your basket`);
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return { toastVisible, toastMessage, addToBasket };
}

export default useAddToBasket;

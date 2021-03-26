export const addToCartFunctionality = (product, products) => {
  const exist = products.find(el => el.id === product.id);

  if (exist) {
    return products.map(element =>
      product.id === element.id
        ? { ...element, quantity: element.quantity + 1 }
        : element
    );
  }

  return [...products, { ...product, quantity: 1 }];
};

export const increaseItemCount = (cartItem, cartItems) => {
  return cartItems.map(item =>
    item.id === cartItem.id
      ? {
          ...item,
          quantity: item.quantity - 1,
        }
      : item
  );
};

export const productWithLikes = (products, likes) => {
  let newProducts = [];
  products.forEach(element => {
    let isLiked = false;
    for (let i = 0; i < likes.length; i++) {
      if (element.id === likes[i].id) {
        isLiked = true;
        break;
      }
    }
    isLiked
      ? newProducts.push({ ...element, liked: true })
      : newProducts.push(element);
  });

  return newProducts;
};

//use 2find methods

//! NOT WORKING THIS FUNCTION

const detectLikedProducts = (products, likes) => {
  console.log(likes);
  return [...products];

  // return likes.length > 0
  //   ? products.map(element => {
  //       let newLike = element;

  //       for (let i = 0; i < likes.length; i++) {
  //         if (element.id === likes[i].id) {
  //           newLike = { ...element, liked: true };
  //         }
  //       }
  //       return newLike;
  //     })
  //   : products;
};

//use 2find methods

export default detectLikedProducts;

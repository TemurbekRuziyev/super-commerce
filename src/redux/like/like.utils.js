const likeGenerator = (like, likes) => {
  //product which will added, products which labeled as liked
  let thereIs = likes.find(item => item.id === like.id);

  if (thereIs) {
    return [...likes.filter(el => el.id !== like.id)];
  }
  return [...likes, { ...like, liked: true }];
};

export default likeGenerator;

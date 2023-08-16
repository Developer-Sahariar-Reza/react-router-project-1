//add data to local storage
export const addToDb = (id) => {
  let shoppingCart = {};

  //get previous data from local storage
  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  //add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  //set data in local storage
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

//get stored data from local storage
export const getStoredCart = () => {
  let shoppingCart = {};

  //get previous data from local storage
  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  return shoppingCart;
};

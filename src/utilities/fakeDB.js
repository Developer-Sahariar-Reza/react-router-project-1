import toast from "react-hot-toast";
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

// remove specific data from local storage
export const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
      toast.error("Product Removed");
    }
  }
};

// clear data from local storage
export const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

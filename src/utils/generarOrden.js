const ordenGenerada = (name, direction, cart, total) => {
  return {
    buyer: {
      name: name,
      direction: direction,
    },
    items: cart,
    total: total,
    createdAt: new Date().toLocaleString(),
  };
};

export default ordenGenerada;

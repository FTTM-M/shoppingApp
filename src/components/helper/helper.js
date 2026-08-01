const Title = (title) => {
  return title.split(" ").slice(0, 3).join(" ");
};

const SearchedProducts = (products, search) => {
  console.log({ products, search });
  if (!search) return products;
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search),
  );
  return filteredProducts;
};

export  { Title, SearchedProducts };

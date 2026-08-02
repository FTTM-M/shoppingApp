const Title = (title) => {
  return title.split(" ").slice(0, 3).join(" ");
};

const SearchedProducts = (products, search) => {
  // console.log({ products, search });
  if (!search) return products;
  const searchProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search),
  );
  return searchProducts;
};

const filteredProducts = (products, category) => {
  if (!category) return products;
  const filterProducts = products.filter((p) => p.category === category);
  return filterProducts;
};

const createQuery = (currentQuery, newquery) => {
  if (newquery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newquery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newquery };
};

export { Title, SearchedProducts, filteredProducts , createQuery };

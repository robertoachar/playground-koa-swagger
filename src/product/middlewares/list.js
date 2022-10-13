export const list = (ctx) => {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
  ];

  ctx.body = products;
};

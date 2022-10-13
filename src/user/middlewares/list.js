export const list = (ctx) => {
  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ];

  ctx.body = users;
};

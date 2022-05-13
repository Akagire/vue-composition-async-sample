export const getUsers = () => {
  return Promise.resolve([
    {
      id: 1,
      name: 'takuya',
    },
    {
      id: 2,
      name: 'yuya',
    },
  ]);
};

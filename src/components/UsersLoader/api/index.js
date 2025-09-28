function getUsers(option) {
  const defaultOptions = {
    page: 1,
    results: 10,
    seed: 'pe2022',
    inc: [
      'picture',
      'name',
      'login',
      'location',
      'cell',
      'email',
      'gender',
      'nat',
    ],
  };

  const realOptions = {
    ...defaultOptions,
    ...option,
  };
  const { page, results, seed, inc } = realOptions;

  return fetch(
    `https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}&inc=${inc}`
  ).then((response) => response.json());
}

export default getUsers;

export const getAll = () =>
    fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc').then(
        (response) => response.json()
    );
export const getOne = (id) => fetch(`http://localhost:3030/data/games/${id}`).then(
    (response) => response.json()
);

export const getAll = () =>
    fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc').then(
        (response) => response.json()
    );

import { useEffect, useState } from 'react';

import GameCard from './GameCard';

const GameCatalog = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
            .then((response) => response.json())
            .then((games) => setGames(games));
    }, []);

    return (
        <section id='catalog-page'>
            <h1>All Games</h1>

            {games.map((game, index) => (
                <GameCard key={index} game={game} />
            ))}

            <h3 className='no-articles'>No articles yet</h3>
        </section>
    );
};
export default GameCatalog;

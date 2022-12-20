import { useEffect, useState } from 'react';

import GameCard from './GameCard';

const GameCatalog = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
            .then((response) => response.json())
            .then((games) => {
                setGames(games);
                setLoading(false);
            });
    }, []);

    return (
        <section id='catalog-page'>
            <h1>All Games</h1>
            {loading && <h3 className='no-articles'> Loading...</h3>}

            {games.length > 0 ? (
                games.map((game) => <GameCard key={game._id} game={game} />)
            ) : (
                <h3 className='no-articles'>No articles yet</h3>
            )}
        </section>
    );
};
export default GameCatalog;

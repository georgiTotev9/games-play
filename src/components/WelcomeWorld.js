import { useState, useEffect } from 'react';
import * as gameService from '../services/gameService';

const GameCard = ({ game }) => (
    <div className='game'>
        <div className='image-wrap'>
            <img src={game.imageUrl} />
        </div>
        <h3>{game.title}</h3>
        <div className='rating'>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
        </div>
        <div className='data-buttons'>
            <a href={`/details/${game._id}`} className='btn details-btn'>
                Details
            </a>
        </div>
    </div>
);

const WelcomeWorld = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll().then((games) => {
            setGames(games);
        });
    }, []);

    return (
        <section id='welcome-world'>
            <div className='welcome-message'>
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src='/images/four_slider_img01.png' alt='hero' />

            <div id='home-page'>
                <h1>Latest Games</h1>

                {games.length > 0 ? (
                    games.map((game) => <GameCard key={game._id} game={game} />)
                ) : (
                    <p className='no-articles'>No games yet</p>
                )}
            </div>
        </section>
    );
};

export default WelcomeWorld;

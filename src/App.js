import { useState } from 'react';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import GameCatalog from './components/GameCatalog/GameCatalog';
import Login from './components/Login';
import CreateGame from './components/CreateGame';
import Register from './components/Register';

function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/': <WelcomeWorld />,
        '/catalog': <GameCatalog />,
        '/login': <Login />,
        '/create': <CreateGame />,
        '/register': <Register />,
    };

    const navigationChangeHandler = (path) => {
        setPage(path);
    };

    return (
        <div id='box'>
            <Header navigationChangeHandler={navigationChangeHandler} />
            <main id='main-content'>
                {routes[page] || <h2>Not found! 404</h2>}
            </main>
        </div>
    );
}

export default App;

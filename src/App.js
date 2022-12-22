import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import GameCatalog from './components/GameCatalog/GameCatalog';
import Login from './components/Login';
import CreateGame from './components/CreateGame';
import Register from './components/Register';

function App() {
    // const [page, setPage] = useState('/home');

    // const routes = {
    //     '/': < />,
    //     '/catalog': < />,
    //     '/login': <Login />,
    //     '/create': <CreateGame />,
    //     '/register': <Register />,
    // };

    // const navigationChangeHandler = (path) => {
    //     setPage(path);
    // };

    return (
        <div id='box'>
            <Route component={Header} />
            <main id='main-content'>
                <Switch>
                    <Route path='/' exact component={WelcomeWorld} />
                    <Route path='/catalog' exact component={GameCatalog} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/create' exact component={CreateGame} />
                    <Route path='/register' exact component={Register} />
                </Switch>
            </main>
        </div>
    );
}

export default App;

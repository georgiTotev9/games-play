import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import GameCatalog from './components/GameCatalog/GameCatalog';
import Login from './components/Login';
import CreateGame from './components/CreateGame';
import Register from './components/Register';
import GameDetails from './components/GameDetails';

function App() {
    return (
        <div id='box'>
            <Header />
            <main id='main-content'>
                <Switch>
                    <Route path='/' exact component={WelcomeWorld} />
                    <Route path='/catalog' exact component={GameCatalog} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/create' exact component={CreateGame} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/details/:gameId' exact component={GameDetails} />
                </Switch>
            </main>
        </div>
    );
}

export default App;

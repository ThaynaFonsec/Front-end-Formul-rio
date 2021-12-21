import React from 'react'
import { Route, Switch } from 'react-router'
import Aliens from './pages/Aliens/Aliens'
import FormAliens from './pages/Aliens/FormAliens'
import Animais from './pages/Animais/Animais'
import FormAnimais from './pages/Animais/FormAnimais'
import Episodio from './pages/Episodio/Episodio'
import FormEpisodios from './pages/Episodio/FormEpisodios'
import FormPersonagens from './pages/Personagens/FormPersonagens'
import Personagens from './pages/Personagens/Personagens'
import FormRicks from './pages/Ricks/FormRicks'
import Ricks from './pages/Ricks/Ricks'

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/personagens' component={Personagens}/>
                <Route exact path='/formpersonagens' component={FormPersonagens}/>
                <Route exact path='/formpersonagens/:id' component={FormPersonagens}/>
                <Route exact path='/animais' component={Animais}/>
                <Route exact path='/formanimais' component={FormAnimais}/>
                <Route exact path='/formanimais/:id' component={FormAnimais}/>
                <Route exact path='/aliens' component={Aliens}/>
                <Route exact path='/formaliens' component={FormAliens}/>
                <Route exact path='/formaliens/:id' component={FormAliens}/>
                <Route exact path='/ricks' component={Ricks}/>
                <Route exact path='/formricks' component={FormRicks}/>
                <Route exact path='/formricks/:id' component={FormRicks}/>
                <Route exact path='/episodios' component={Episodio}/>
                <Route exact path='/formepisodios' component={FormEpisodios}/>
                <Route exact path='/formepisodios/:id' component={FormEpisodios}/>
            </Switch>
        </>
    )
}

export default Routes

import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { DeckProvider } from './contexts/Deck'

import Header from './components/Header'
import Main from './pages/Main'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <DeckProvider>
        <BrowserRouter>
          <Switch>
            <Route path="" exact component={Main} />
          </Switch>
        </BrowserRouter>
      </DeckProvider>
    </>
  )
}

render(<App />, mainElement)

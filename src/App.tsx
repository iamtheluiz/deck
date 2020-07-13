import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { DeckProvider } from './contexts/Deck'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Header from './components/Header'
import Main from './pages/Main'
import Settings from './pages/Settings'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <DeckProvider>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <Switch>
              <Route path="/settings" exact component={Settings} />
              <Route path="*" component={Main} />
            </Switch>
          </BrowserRouter>
        </DndProvider>
      </DeckProvider>
    </>
  )
}

render(<App />, mainElement)

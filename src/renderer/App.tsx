import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Drag and Drop
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DeckProvider } from './contexts/Deck';

// Styles
import { GlobalStyle } from './styles/GlobalStyle';
import 'tailwindcss/tailwind.css';

// Components
// import ApplicationHeader from './components/ApplicationHeader';

// Pages
import Main from './pages/Main';
import Settings from './pages/Settings';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

export default function App() {
  return (
    <>
      <GlobalStyle />
      {/* <ApplicationHeader /> */}
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
  );
}

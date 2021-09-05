import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchState from './context/state'
import { MainPage } from './components/MainPage'
import { ListItem } from './components/ListItem/ListItem'
import { Search } from './components/Search/Search'
import { ItemInfo } from './components/ItemInfo/ItemInfo';
import './App.scss';

function App() {
  return (
    <SearchState>
      <div className="App">
        <Router>
          <Search />
          <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/items' component={ListItem}/>
            <Route exact path='/items/:id' component={ItemInfo}/>
          </Switch>
        </Router>
      </div>
    </SearchState>
  );
}

export default App;

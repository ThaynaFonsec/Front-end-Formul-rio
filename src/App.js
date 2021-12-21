import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home/Home';
import Routes from './Routes';

function App() {
  return (
    <>
      <Menu/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
        </Switch>
        <Container>
          <Routes/>
        </Container>
      </BrowserRouter>
    
    </>
  );
}

export default App;

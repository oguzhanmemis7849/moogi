import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbars from './components/Navbars';
import Slider from './components/Slider';
import NewProduct from './components/NewProduct';


const App = () => {
  return (
    <Router>
      <div className="App">
            <Route path='/' exact strict>
                <Navbars/>
                <Slider/>
                <NewProduct/>
            </Route>
      </div>
    </Router>
  );
}


export default App;

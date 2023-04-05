
import {HashRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DogList from './pages/DogList';
import ScrollToTopRoute from './ScrollToTopRoute'
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';

function App() {
  
  return (
  <div className='app'>
   
   <Router>
       <Switch>
          <ScrollToTopRoute exact={true} path='/'>
          <Home/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/doglist'>
            <DogList/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/adoption'> 
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/breeder'>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/breeder-details'>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/contacts'>
            <ContactPage/>
          </ScrollToTopRoute>

          <ScrollToTopRoute exact={true} path='/home-two'>
          </ScrollToTopRoute>
       </Switch>
      <Footer/>
   </Router>
 
  </div>
  );
}

export default App;
   
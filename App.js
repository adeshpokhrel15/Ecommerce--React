import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Homescreen from './Screens/Homescreen';
import {BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom';
// import Productdetails from './Screens/Productdetails';

function App() {
  return (
    <Router>  
      <Header />
       <main>
        <Container>
          <h1> Welcome to Mobile Shop </h1>
          <Routes>
            <Route path="/" element={<Homescreen />}/> 
            {/* <Route path="/product/:id" element={<Productdetails/>}/> */}
          </Routes>
        </Container>
      
        
      </main>
      <Footer />
    </Router>
  );
}

export default App;

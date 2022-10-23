import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './router/AppRouter';


function App() {
  return (
    <>
       <BrowserRouter>
       <NavBar/>
       <AppRouter>   
       </AppRouter>
        <Footer/>
       </BrowserRouter>

    </>
  );
}

export default App;

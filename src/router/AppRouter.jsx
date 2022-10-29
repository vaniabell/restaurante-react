import {Navigate, Route, Routes} from 'react-router-dom';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Where from '../pages/Where';
import Home from '../pages/Home';
import Reservations from '../pages/Reservations';
function AppRouter() {
    return (  
        <>
        <Routes>
            <Route path="home" element ={<Home/>}/>
            <Route path="about" element ={<About/>}/>
            <Route path="menu" element ={<Menu/>}/>
            <Route path="where" element ={<Where/>}/>
            <Route path="reservations" element ={<Reservations/>}/>
            <Route path="/" element ={<Navigate to="/home"/>}/>
        </Routes>
        </>
    );
}

export
 default AppRouter;
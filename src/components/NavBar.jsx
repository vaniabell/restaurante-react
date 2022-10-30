import {Link} from 'react-router-dom';

function NavBar() {
    return (  
        <> 
        <div className="w3-top">
        <div className="w3-row w3-padding w3-black ">
            <div className="w3-button w3-round-large">
              <Link className="w3-button w3-round-xxlarg" to="/home">HOME</Link>
            </div>
            <div className="w3-button w3-round-large">
              <Link className="w3-button w3-round-xxlarg" to="/about">ABOUT</Link>
            </div>
            <div className="w3-button w3-round-large">
              <Link className="w3-button w3-round-xxlarg"to="/menu">MENU</Link>
            </div>
            <div className="w3-button w3-round-large">
              <Link className="w3-button w3-round-xxlarg" to="/where">WHERE</Link>
            </div>
            <div className="w3-button w3-round-large">
              <Link className="w3-button w3-round-xxlarg" to="/Reservations">RESERVATIONS</Link>
            </div>
          </div>
        </div>
        </>
    );
}

export default NavBar;
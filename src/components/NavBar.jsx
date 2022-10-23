import {Link,NavLink} from 'react-router-dom';

function NavBar() {
    return (  
        <> 
        <div className="w3-top">
          <div className="w3-row w3-padding w3-black">
            <div className="w3-col s3">
              <Link className="w3-button w3-block w3-black" to="/home">HOME</Link>
            </div>
            <div className="w3-col s3">
              <Link className="w3-button w3-block w3-black" to="/about">ABOUT</Link>
            </div>
            <div className="w3-col s3">
              <Link className="w3-button w3-block w3-black"to="/menu">MENU</Link>
            </div>
            <div className="w3-col s3">
              <Link className="w3-button w3-block w3-black" to="/where">WHERE</Link>
            </div>
          </div>
        </div>
        </>
    );
}

export default NavBar;
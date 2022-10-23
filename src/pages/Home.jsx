import Background from './Background'
function Home() {
  return (
    <>
      {/* Add a background color and large text to the whole page */}
      
      <div className="w3-sand w3-grayscale w3-large">
      </div>

      <header className="bgimg w3-display-container w3-grayscale-min" id="home">
        <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
          <span className="w3-tag">Open from 8am to 10pm</span>
        </div>
        <div className="w3-display-middle w3-center">
          <span className="w3-text-black" style={{ fontSize: 90 }}>THE<br />LIMBO</span>
        </div>
        <div className="w3-display-bottomright w3-center w3-padding-large">
          <span className="w3-tag">15 Adr street, 5015</span>
        </div>
        <Background/>
  
      </header>
      <p>HOLA </p>
      
    </>
  );
}

export default Home;
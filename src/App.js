import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <div className="w3-top">
          <div className="w3-row w3-padding w3-black">
            <div className="w3-col s3">
              <a href="#" className="w3-button w3-block w3-black">HOME</a>
            </div>
            <div className="w3-col s3">
              <a href="#about" className="w3-button w3-block w3-black">ABOUT</a>
            </div>
            <div className="w3-col s3">
              <a href="#menu" className="w3-button w3-block w3-black">MENU</a>
            </div>
            <div className="w3-col s3">
              <a href="#where" className="w3-button w3-block w3-black">WHERE</a>
            </div>
          </div>
        </div>
        {/* Header with image */}
        <header className="bgimg w3-display-container w3-grayscale-min" id="home">
          <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
            <span className="w3-tag">Open from 6am to 5pm</span>
          </div>
          <div className="w3-display-middle w3-center">
            <span className="w3-text-white" style={{ fontSize: 90 }}>the<br />Cafe</span>
          </div>
          <div className="w3-display-bottomright w3-center w3-padding-large">
            <span className="w3-text-white">15 Adr street, 5015</span>
          </div>
        </header>
        {/* Add a background color and large text to the whole page */}
        <div className="w3-sand w3-grayscale w3-large">
          {/* About Container */}
          <div className="w3-container" id="about">
            <div className="w3-content" style={{ maxWidth: 700 }}>
              <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT THE CAFE</span></h5>
              <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
              <div className="w3-panel w3-leftbar w3-light-grey">
                <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
                <p>Chef, Coffeeist and Owner: Liam Brown</p>
              </div>
              <img src="/w3images/coffeeshop.jpg" style={{ width: '100%', maxWidth: 1000 }} className="w3-margin-top" />
              <p><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
              <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
            </div>
          </div>
          {/* Menu Container */}
          <div className="w3-container" id="menu">
            <div className="w3-content" style={{ maxWidth: 700 }}>
              <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">THE MENU</span></h5>
              <div className="w3-row w3-center w3-card w3-padding">
                <a href="javascript:void(0)" onclick="openMenu(event, 'Eat');" id="myLink">
                  <div className="w3-col s6 tablink">Eat</div>
                </a>
                <a href="javascript:void(0)" onclick="openMenu(event, 'Drinks');">
                  <div className="w3-col s6 tablink">Drink</div>
                </a>
              </div>
              <div id="Eat" className="w3-container menu w3-padding-48 w3-card">
                <h5>Bread Basket</h5>
                <p className="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br />
                <h5>Honey Almond Granola with Fruits</h5>
                <p className="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br />
                <h5>Belgian Waffle</h5>
                <p className="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p><br />
                <h5>Scrambled eggs</h5>
                <p className="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br />
                <h5>Blueberry Pancakes</h5>
                <p className="w3-text-grey">With syrup, butter and lots of berries 8.50</p>
              </div>
              <div id="Drinks" className="w3-container menu w3-padding-48 w3-card">
                <h5>Coffee</h5>
                <p className="w3-text-grey">Regular coffee 2.50</p><br />
                <h5>Chocolato</h5>
                <p className="w3-text-grey">Chocolate espresso with milk 4.50</p><br />
                <h5>Corretto</h5>
                <p className="w3-text-grey">Whiskey and coffee 5.00</p><br />
                <h5>Iced tea</h5>
                <p className="w3-text-grey">Hot tea, except not hot 3.00</p><br />
                <h5>Soda</h5>
                <p className="w3-text-grey">Coke, Sprite, Fanta, etc. 2.50</p>
              </div>
              <img src="/w3images/coffeehouse2.jpg" style={{ width: '100%', maxWidth: 1000, marginTop: 32 }} />
            </div>
          </div>
          {/* Contact/Area Container */}
          <div className="w3-container" id="where" style={{ paddingBottom: 32 }}>
            <div className="w3-content" style={{ maxWidth: 700 }}>
              <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">WHERE TO FIND US</span></h5>
              <p>Find us at some address at some place.</p>
              <img src="/w3images/map.jpg" className="w3-image" style={{ width: '100%' }} />
              <p><span className="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
              <p><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
              <form action="/action_page.php" target="_blank">
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" /></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="People" /></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" defaultValue="2020-11-16T20:00" /></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>
                <p><button className="w3-button w3-black" type="submit">SEND MESSAGE</button></p>
              </form>
            </div>
          </div>
          {/* End page content */}
        </div>
        {/* Footer */}
        <footer className="w3-center w3-light-grey w3-padding-48 w3-large">
          <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">w3.css</a></p>
        </footer>
      </div>


    </>
  );
}

export default App;

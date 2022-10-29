function Reservations() {
    return (  
        <>
         <div className="w3-container" id="where" style={{ paddingBottom: 32 }}> 
         <form action="/action_page.php" target="_blank">
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="People" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" defaultValue="2020-11-16T20:00" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>
            <p><button className="w3-button w3-black" type="submit">SEND MESSAGE</button></p>
          </form>
          <div class="w3-container"> 
      <table class="w3-table w3-striped w3-bordered">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Points</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          <tr>
            <td>Adam</td>
            <td>Johnson</td>
            <td>67</td>
          </tr>
        </table>
      </div>
         </div>

        
    
     


       
      
        </>
    );
}

export default Reservations;
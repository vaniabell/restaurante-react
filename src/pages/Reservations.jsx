function Reservations() {
    return (  
        <>
         <div className="w3-container w3-padding-64" id="where" style={{ paddingBottom: 32 }}> 
         <form >
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="tel" placeholder="Phone" required name="phone" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="email" placeholder="Email" required name="email" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="People" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" defaultValue="2020-11-16T20:00" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>
            <p><button className="w3-button w3-black" type="submit">SEND MESSAGE</button></p>
          </form>
          <div class="w3-container"> 
      <table class="w3-table w3-striped w3-bordered">
          <tr>
            <th>Name</th>
            <th> # People</th>
            <th>Date </th>
            <th>Time</th>
          </tr>
          <tr>
            <td>Jill</td>
            
           
          </tr>
          <tr>
            <td>Eve</td>
            
          </tr>
          <tr>
            <td>Adam</td>
          
          </tr>
        </table>
      </div>
         </div>

        
    
     


       
      
        </>
    );
}

export default Reservations;
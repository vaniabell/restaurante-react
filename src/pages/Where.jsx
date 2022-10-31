import { useState } from 'react';
import { db } from '../firebase';
import { addDoc,collection} from 'firebase/firestore';
import Captura from './img/Captura.PNG';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
function Where() {
  const [formulario, setFormulario] = useState({
    name:'',
    phone:'',
    email:'',
    people:'',
    date:'',
    message:'',

  });
const navigate =useNavigate();
  const handleInputChange =(event) =>{
    setFormulario({
      ...formulario,
    [event.target.name]: event.target.value
    });
  }

  const guardarFormulario = async (event) => {
    event.preventDefault();
    console.log(formulario);
    await addDoc(collection(db, "clientes"), formulario);
    Swal.fire(
      'Mensaje',
      'Reservation Done',
      'success'
    ).then(()=>{
      navigate("/reservations");

      
    });
   
  };
  return (
    <>
      {/* Contact/Area Container */}
      <div className="w3-container" id="where" style={{ paddingBottom: 32 }}> 
      <div className="w3-content" style={{ maxWidth: 700 }}>
          <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">WHERE TO FIND US</span></h5>
          <p>Find us at some address at some place.</p>
          <img src={Captura} className="w3-image" style={{ width: '100%' }} alt="map"/>
          <p><span className="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
          <p><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
          <div className="w3-container w3-padding-64" id="where" style={{ paddingBottom: 32 }}>
           
          <form onSubmit={guardarFormulario}>

            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" name="name" onChange={handleInputChange} /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="tel" placeholder="Phone" required name="phone" onChange={handleInputChange}  /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="email" placeholder="Email" required name="email" onChange={handleInputChange} /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="people"  onChange={handleInputChange} /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" defaultValue="2020-11-16T20:00" onChange={handleInputChange} /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="message" onChange={handleInputChange}  /></p>
            <p><button className="w3-button w3-black" type="submit">SEND MESSAGE</button></p>
          </form>
          </div>
          
      </div>
      </div>
      
       
      

    </>
  );
}

export default Where;
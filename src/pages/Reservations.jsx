import { collection,onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { useState, useEffect } from "react";

function Reservations() {
  const [datos, setDatos] = useState([]);
  const getData = async () => {
    //const snapshot = await onSnapshot(collection(db, "clientes"));
    //console.log(snapshot.docs.map(doc => doc.data()));
    //setDatos(snapshot.docs.map(doc => doc.data()));
    onSnapshot(collection(db,"clientes"), (querySnapshot) => {
      setDatos(querySnapshot.docs.map(doc =>{
        return {...doc.data()}
      }));

      });
    

  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    
      <div className="w3-container w3-padding-64" id="where" style={{ paddingBottom: 100 }}>

        <div className="w3-container">
          <table className="w3-table w3-striped w3-bordered">
            <thead>
            <tr>
                <th>Name</th>
                <th> # People</th>
                <th>Date </th>
                <th>Time</th>
                <th>message</th>
              </tr>

            </thead>
            <tbody>
  
                  {
                    datos.map((cliente,index)=>{
                      return(
                        <tr key={index}>
                    <th>{cliente.name}</th>
                    <th>{cliente.people}</th>
                    <th>{cliente.date}</th>
                    <th>{cliente.time}</th>
                    <th>{cliente.message}</th>
                  </tr>
                      )
                    })
                  }


            </tbody>
          </table>

        </div>
      </div>








    </>
  );
}

export default Reservations;
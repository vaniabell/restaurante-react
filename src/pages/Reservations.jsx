import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { useState, useEffect } from "react";

function Reservations() {
  const [datos, setDatos] = useState([]);
  const getData = async () => {
    const snapshot = await getDocs(collection(db, "clientes"));
    console.log(snapshot.docs.map(doc => doc.data()));
    setDatos();

  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <code>{JSON.stringify(datos)}</code>
      <div className="w3-container w3-padding-64" id="where" style={{ paddingBottom: 32 }}>

        <div className="w3-container">
          <table className="w3-table w3-striped w3-bordered">
            <thead>
            <tr>
                <th>Name</th>
                <th> # People</th>
                <th>Date </th>
                <th>Time</th>
              </tr>

            </thead>
            <tbody>
  
                    <tr>
                    <th>k</th>
                    <th>k</th>
                    <th>k</th>
                    <th>k</th>
                  </tr>


            </tbody>
          </table>

        </div>
      </div>








    </>
  );
}

export default Reservations;
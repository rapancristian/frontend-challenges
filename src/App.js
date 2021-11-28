import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const getData = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
       {data.map(entry => <div>{entry["Company Name"]}</div>)}
   </div>
  );
}

export default App;

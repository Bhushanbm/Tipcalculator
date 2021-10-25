
import React, { useState } from 'react'
import Header from "./Components/Header";
import Input from "./Components/Input";
import Output from "./Components/Output";
import Footer from "./Components/Footer";
import './App.css';

function App() {

    const [data, setData] = useState([])

    console.log("yeh print kro", data, data.length)
    function AddDetails(details) {

        setData([
            ...data, details
        ])
    }


    /*const [state, setState] = useState(0);
    const [name, setName] = useState();

    const calculateTip = (dataFromInput) => {
        setState(dataFromInput);
    }

    const addCustomer = (dataFromInput) => {
        setName(dataFromInput);
        console.log(dataFromInput);*/
    
  return (
    <div className="App">
          <Header />
          <Input AddDetails={AddDetails} />
          <Output data={data} />
          <Footer/>

    </div>
  );
}

export default App;

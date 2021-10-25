import React, {useState} from 'react'

function Input(props) {
    /*const [amount, setAmount] = useState();
    const [person, setPerson] = useState();
    const [service, setService] = useState();*/

    const [details, setDeatails] = useState({
        name: "",
        amount: 0,
        service: 0,
        tip: 0,
    })


    function handleChange(event) {

        setDeatails({
            ...details, [event.target.name]: event.target.value
        })

    }

    /*const handleAmount = (event) => {
        setAmount(event.target.value);
    }

    const handleService = (event) => {
        setService(event.target.value);
    }

    this.state = {
       
        tipResultDisplay: "none",
        calculatePressed: false
    };*/

    const createTip = () => {
         details.tip = details.amount * details.service;
        props.AddDetails(details);
        debugger;
        /*this.setState({
            calculatePressed: true,
            tipResultDisplay: "block",
        });*/
    }

    
    return (
        <div className="input">
            <p>Enter your Bill Amount</p>
            <input name="amount" placeholder="amount" onChange={handleChange}/>
            <br />
            <p>How was the service</p>
            <select className="select" name="service" id="service" onChange={handleChange} >
                <option value="0">Choose your rating</option>
                <option value="0.05">Bad 5%</option>
                <option value="0.10">Moderate 10%</option>
                <option value="0.20">Excellent 20%</option>
            </select>
            <br />
            
            <p>Enter customer name</p>
            <input name="name" onChange={handleChange} placeholder="Customer Name" size="50" />
            <br />
            <br />
            
            <button className="addButton" onClick={createTip}>Add Customer</button>
          
        </div>
    )
}

export default Input

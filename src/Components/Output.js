import React, {useState} from 'react'


function Output(props) {

    const [show, setShow] = useState(false)

    function totalTipCustomer() {

        setShow(true)
    }

    //const { tipResultDisplay, tip } = this.props;
    return (

        <div className="container-fluid  bg-light">
           
            <div className="container">

                <h4 className="customer_list">CUSTOMERS LIST</h4>

                
                    

                    <div className="Output">
                            {

                                props.data.map((element, index) => (
                                    <p>{element.name} offering a tip of {element.tip} rupee. </p>
                                ))
                            }
                    </div>
                
                
                <button onClick={totalTipCustomer} className="tc">Total Tip & Customer</button>
                <br />
                <br />

                <div className="info" role="alert">
                    <table className="tab">
                        <thread>
                            <tr>
                                <th>Total Customer</th>
                                
                                <th>Total Tip</th>
                            </tr>
                        </thread>
                        <br/>
                        <thread>
                            <tr>
                                <td>{show ? props.data.length : ''}</td>
                                <td>{show ? props.data.reduce((acc, element) => { acc += element.tip; return acc }, 0) : ''}</td>
                             </tr>
                            </thread>
                        </table>
                </div>

            </div>
        </div>
    )
}

export default Output




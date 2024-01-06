import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Convertor = () => {

    const [currency, setCurrency] = useState({ getCurrency: '' });
    console.log(currency, 'currency')

    const [convertor, setConvertor] = useState([]);

    const route = useNavigate();

    const handleOnChange = (event) => {
        setCurrency({ ...currency, [event.target.name]: event.target.value });
    }

    const storeData = async (event) => {
        event.preventDefault();
        if (currency.getCurrency) {
            const converted = currency.getCurrency * 80;
            console.log(converted, 'converted')
            const finalConverison = {
                finalValue: converted
            }
            setConvertor([...convertor, finalConverison])
            console.log(finalConverison, 'finalConverison' )
            setCurrency({ getCurrency: '' })
            try {

                const response = { data: convertor }
                console.log(response.data)
                // const response = await axios.post('http://localhost:8000/api/v1/crypto-convertor', { currency })

                if (response.data) {
                    alert('conversion success')
                    // route('/')
                }
                else {
                    alert('conversion error')
                }

            } catch (error) {
                alert('error during api')
            }
        }
        else {
            alert(error)
        }
    }


    return (
        <>
            <div>Convertor Home</div>
            <form onSubmit={storeData}>
                <label htmlFor="amount">Add Amount:</label>
                <input type="number" name="getCurrency" id="amount" onChange={handleOnChange} value={currency.getCurrency} placeholder="Your Amount" />
                <input type="submit" value="Click to Convert" />
            </form>

            {finalConverison?.length ? <div>{finalConverison.map((item, index) => (<div key={index}>
                <p>{item.finalValue}</p>
            </div>))}</div> : <div>Loading</div>}
            {/* <div>{currency.map((item, index)=>(
                <div key={index}>
                    <p>{item.getCurrency}</p>
                </div>
            ))}</div> */}
        </>
    )
}

export default Convertor;
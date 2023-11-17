import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'

const Calculator = () => {
    const [result, setResult] = useState(null);
    const [oparation, setOparation] = useState(null);
    const [values, setValues] = useState({
        numberO_One: 0,
        numberO_Two: 0,
        sign: ''
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const requestBody = {
            numberO_One: values.numberO_One,
            numberO_Two: values.numberO_Two,
            sign: values.sign
        };

        console.log("man", requestBody)

        try {
            const response = await axios.post('https://localhost:7101/api/Calculator/all', requestBody);

            setResult(response.data.result);
            setOparation(response.data.operation);
            console.log(response.data.oparation)
        } catch (error) {
            console.log('Error calculating:', error);
        }
    };

    return (
        <div className='container'>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <h2>Calculator Application</h2>

                    <input type="number" value={values.numberO_One} onChange={handleChange}
                        name="numberO_One"
                        placeholder='number-one' />
                    <input type="number" value={values.numberO_Two} onChange={handleChange}
                        name="numberO_Two"
                        placeholder='number-two' />
                    <input type="text" value={values.sign} onChange={handleChange}
                        name="sign"
                        placeholder='sign' />
                    <button>Calculate</button>
                </form>
            </div>

            <p> <span>Result:</span> {result}</p>
            <p><span>Oparation:</span> {String(oparation)}</p>
        </div>
    );
};

export default Calculator;

import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'

const Calculator = () => {
    const [result, setResult] = useState(null);
    const [oparation, setOparation] = useState(null);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault()

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

                    <input type="emsil" value={email} onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder='email' />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        placeholder='password' />
                    <button>Submit</button>
                </form>
            </div>

        </div>
    );
};

export default Calculator;

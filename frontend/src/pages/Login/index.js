import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await api.post('/sessions', { email });

        console.log(response);

        const { _id } = response.data;

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        <>
        <p>Participe da maior comunidade jurídica especializada em consultorias.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Informe seu e-mail" 
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button className='btn' type="submit">Entrar</button>
        </form>        
        </>
    );
}
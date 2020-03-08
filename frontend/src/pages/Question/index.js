import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

export default function Question({ history }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    async function handleSubmit(event) {

        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('title', title);
        data.append('body', body);

        await api.post('/question', data, {
            headers: { user_id }
        });

        history.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="title">ASSUNTO *</label>
            <input 
                id="title"
                placeholder="Informe o assunto"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor="body">DÚVIDA *</label>
            <textarea 
                id="body"
                placeholder="Informe sua dúvida."
                value={body}
                onChange={event => setBody(event.target.value)}
                cols={40} rows={10}
            />

            <button type="submit" className="btn">Enviar</button>
        </form>
    )
}
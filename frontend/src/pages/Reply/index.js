import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

export default function Reply({ history }) {
    const [body, setBody] = useState('');

    async function handleSubmit(event) {

        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('body', body);

        await api.post('/reply', data, {
            headers: { user_id }
        });

        history.push('/reply/list');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">DÚVIDA *</label>
            <h1>Hello World!</h1>

            <label htmlFor="body">RESPOSTA *</label>
            <textarea 
                id="reply"
                placeholder="Informe sua sua resposta."
                value={body}
                onChange={event => setBody(event.target.value)}
                cols={40} rows={10}
            />

            <button type="submit" className="btn">Enviar</button>
        </form>
    )
}
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
    //const [spots, setSpots] = useState([]);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function loadQuestions() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/question/list', {
                headers: { user_id }
            });
            setQuestions(response.data);
        }

        loadQuestions();

    }, [])

    return (
        <>
            <ul className="question-list">
                {questions.map(question => (
                    <li key={question._id}>
                        <strong>{question.title}</strong>
                    </li>
                ))}
            </ul>

            <Link to="/question">
                <button className="btn">Nova Dúvida</button>
            </Link>
        </>
    )
}
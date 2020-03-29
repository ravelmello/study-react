import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../../services/api';

import logoImg from '../../../assets/logo.svg';

import './styles.css';

export default function CreateIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleIncidentCreate(event) {
        event.preventDefault();
        const data = {
            title,
            description,
            value
        };

        try {
            const response = await api.post('incident', data, {
                headers: {
                    Authorization: ongId
                }
            });
            history.push('/profile')
        } catch (error) {
            alert("Não foi possivel cadastrar")
        }
    }



    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="" />
                    <h1>Cadastro de Incidentes</h1>
                    <p>Cadastre seu novo incidente.</p>
                    <Link className="backlink" to="/profile">
                        <FiArrowLeft size={16} color='#E02041' />
                    Retornar à página principal
                </Link>
                </section>
                <form onSubmit={handleIncidentCreate}>
                    <input type="text"
                        placeholder="Título do incidente"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        className="textarea"
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Valor em reais"
                        value = {value}
                        onChange = {e=>setValue(e.target.value)}
                    />

                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
        </div>
    );
}
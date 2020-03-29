import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Login() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function onHandleLogin(event){
        event.preventDefault();


        try {
            const response = await api.post('login', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

            console.log(response.data.name);
        } catch (error) {
            alert("Falha no Login!")
        }
        

    }

    return (
       <div className="logon-container">
           <section className="form">
                <img src={logoImg} alt="BeTheHero"/>

                <form onSubmit={onHandleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        type="text" 
                        placeholder="Sua ID"
                        value = {id}
                        onChange = {e=>setId(e.target.value)}    
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="backlink" to="/register">
                        <FiLogIn size={16} color='#E02041'/>
                        Não tenho cadastro
                    </Link>
                </form>
           </section>

           <img src={heroesImg} alt="heroes"/>
       </div>
    );
}
import React, { useState } from 'react'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/API'

export default function Logon(){
    const history = useHistory()
    const [id, setId] = useState('')

    async function handleLogin(event) {
        event.preventDefault()

        try {
            const response = await api.post('/sessions', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
            
        } catch(err){
            alert('Falha no login, tente novamente mais tarde.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin} >
                    <h1>Faça seu Login</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={ event => setId(event.target.value) }
                    />
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />Não Tenho Cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}
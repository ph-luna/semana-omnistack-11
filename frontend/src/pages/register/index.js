import React, { useState } from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/API'

export default function Register() {
    const [ONGName, setONGName] = useState('')
    const [Email, setEmail] = useState('')
    const [Whats, setWhats] = useState('')
    const [City, setCity] = useState('')
    const [UF, setUF] = useState('')

    const history = useHistory()
    
    async function handleRegister(event) {
        event.preventDefault() 
        const data = {
            name: ONGName,
            email: Email,
            whatsapp: Whats,
            city: City,
            uf: UF
        }

        console.log(data)

        try {
            const response = await api.post('ongs', data)
            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/')
        }catch(err){
            alert('Erro no cadastro, tente novamente em 5 minutos.')
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />Voltar para o inicio.
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        onChange={ event => setONGName(event.target.value) } 
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        onChange={ event => setEmail(event.target.value) }
                    />
                    <input 
                        placeholder="Whatsapp" 
                        onChange={ event => setWhats(event.target.value) }
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            onChange={ event => setCity(event.target.value) }
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            onChange={ event => setUF(event.target.value) }
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
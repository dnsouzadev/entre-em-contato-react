import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './index.css';

const Formulario = () => {

    const aoSalvar = (e) => {
        e.preventDefault();
        console.log('Formulário enviado! =>', nome, contato, email, assunto);
    }

    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Entre em contato comigo.</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label='Contato' placeholder='Digite seu telefone' valor={contato} aoAlterado={valor => setContato(valor)} />
                <CampoTexto obrigatorio={true} label='Email' placeholder='Digite seu melhor e-mail' valor={email} aoAlterado={valor => setEmail(valor)} />
                <ListaSuspensa obrigatorio={true} itens={['Dúvida', 'Sugestão', 'Reclamação']} label='Assunto' valor={assunto} aoAlterado={valor => setAssunto(valor)}/>
                <Botao texto='Enviar' />
            </form>
        </section>
    )
};

export default Formulario;

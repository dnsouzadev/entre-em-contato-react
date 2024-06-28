import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './index.css';

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Entre em contato comigo.</h2>
                <CampoTexto label='Nome' placeholder='Digite seu nome' />
                <CampoTexto label='Contato' placeholder='Digite seu telefone'/>
                <CampoTexto label='Email' placeholder='Digite seu melhor e-mail'/>
                <ListaSuspensa itens={['Dúvida', 'Sugestão', 'Reclamação']} label='Assunto'/>
            </form>
        </section>
    )
};

export default Formulario;

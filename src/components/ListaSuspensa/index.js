import './index.css';

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={e => props.aoAlterado(e.target.value)} required={props.required}>
                {props.itens.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        </div>
    )

}

export default ListaSuspensa;

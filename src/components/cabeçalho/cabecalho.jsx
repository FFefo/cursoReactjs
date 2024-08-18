import "./cabecalho.scss";
import { Link } from "react-router-dom";

export default function Cabecalho(props) {
    return(
    <header className='cabecalho'>
        <Link to='/'>
            <i className='fa fa-arrow-left voltar'></i>
        </Link>
        <h2>{props.titulo ?? 'ReactJS'}</h2>
    </header>)
}
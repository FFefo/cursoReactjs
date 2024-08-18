import './contato.scss'
import { Link } from 'react-router-dom';

export default function Contato() {


    return (
        <div className='pagina-contato pagina'>
            <header className='cabecalho'>
                <Link to='/'>
                <i className='fa fa-arrow-left voltar'></i>
                </Link>
                <h1 className='titulo1'>Contatinhos</h1>
            </header>

            <section className='secao'>
                <h1>Entre em contato!</h1>
                <img src='/assets/images/contatinhos.png' alt='' width='50px'/>
            </section>
        </div>
    )
}
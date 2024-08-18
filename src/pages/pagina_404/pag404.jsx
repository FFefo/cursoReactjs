import './pag404.scss'
import { Link } from 'react-router-dom';


export default function P404() {
    return (
        <div className='pagina-erro pagina'>
            <header className='cabecalho'>
                <h1>Deu ruim amigão, essa pagina não existe :d</h1>
                <Link to='/'><h2>Clique aqui para voltar para a página inicial</h2></Link>
            </header>
        </div>
    )
}
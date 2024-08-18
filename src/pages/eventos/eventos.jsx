import Cabecalho from '../../components/cabeçalho/cabecalho';
import './eventos.scss'
import { Link } from 'react-router-dom';

export default function Eventos() {

    return (
        <div className='pagina-eventos pagina'>

            <Cabecalho titulo='ReactJS | Eventos'/>

            <section className='secao'>
                <h1>Entendendo eventos</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias pariatur eius eaque illum aliquam odio, placeat deleniti nihil sunt eum, itaque sint harum nostrum dicta fuga veniam ad reprehenderit tenetur.</p>

                <input type="text" placeholder='Digite aqui alguma coisa' />

                <select name="" id="">
                    <option>Selecione</option>
                    <option>Item A</option>
                    <option>Item B</option>

                </select>

                <div className='grupo'>
                    <input type='checkbox' /> Opção 1
                    <input type='checkbox' /> Opção 2
                </div>

                <div className='grupo'>
                    <div>
                        <input type='radio' name='g1'/> Opção 1
                    </div>

                    <div>
                        <input type='radio' name='g1'/> Opção 2
                    </div>
                </div>

                <button>Clique aqui</button>

            </section>

        </div>

    )

}
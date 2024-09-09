import { useState } from 'react';
import Cabecalho from '../../components/cabeçalho/cabecalho';
import CartaoFilme from '../../components/cartaoFilme/filme';

import './rende.scss';

export default function RenderizacaoCondicional() {
    const [exibirBiscoitoSorte, setExibirBiscoitoSorte] = useState(false);

    const [nomeFilme, setNomeFilme] = useState('');
    const [classificacaoFilme, setClassificacaoFilme] = useState('');
    const [urlFilme, setUrlFilme] = useState('');
    const [estreiaFilme, setEstreiaFilme] = useState('');
    const [destaqueFilme, setDestaqueFilme] = useState(false);
    const [listaFilmes, setListaFilmes] = useState([]);

    function abrirFecharBiscoitoSorte() {
        setExibirBiscoitoSorte(!exibirBiscoitoSorte)
    }

    function adicionarFilme() {
        if (nomeFilme === '' || classificacaoFilme === '' || urlFilme === '') {
            alert('Preencha todos os campos.');
            return;
        }

        let novoFilme = {
            nome: nomeFilme,
            classificacao: classificacaoFilme,
            url: urlFilme,
            estreia: estreiaFilme,
            destaque: destaqueFilme
        }

        setListaFilmes([...listaFilmes, novoFilme]);
        setNomeFilme('')
        setClassificacaoFilme('')
        setUrlFilme('')

    }


    return (
        <div className='pagina-rende-cond pagina'>
            <Cabecalho titulo="ReactJS | Renderização Condicional" />

            <div className='secao'>
                <h1>Biscoito da Sorte</h1>
                <button onClick={abrirFecharBiscoitoSorte}>
                    {exibirBiscoitoSorte == true ? 'Fechar' : 'Abrir'}
                </button>
                {exibirBiscoitoSorte == true &&
                    <p className='msg-biscoito'>
                        "Sempre haverá pessoas melhores e piores em habilidades diferentes. Avance e ajude."
                    </p>
                }
            </div>

            <div className='secao filmes'>
                <h1>Catálogo de Filmes</h1>

                <div className='entradas'>
                    <input type="text" placeholder='Nome do Filme' value={nomeFilme} onChange={e => setNomeFilme(e.target.value)} />
                    <input type="text" placeholder='Classificação' value={classificacaoFilme} onChange={e => setClassificacaoFilme(e.target.value)} />
                    <input type="text" placeholder='URL da Capa' value={urlFilme} onChange={e => setUrlFilme(e.target.value)} />
                    <input type="text" placeholder='Estreia do Filme' value={estreiaFilme} onChange={e => setEstreiaFilme(e.target.value)} />
                    <div className='check'>
                        <input type="checkbox" value={destaqueFilme} onChange={e => setDestaqueFilme(e.target.value)} />
                        <label>Destaque</label>
                    </div>

                    <button onClick={adicionarFilme}>Adicionar</button>

                </div>

                <div className='lista'>
                    {listaFilmes.map(item =>
                        <CartaoFilme item={item} />
                    )}
                </div>

            </div>

        </div>
    )
}
import './comps.scss';
import { useState } from 'react';

import Cabecalho from '../../components/cabeçalho/cabecalho';
import Contador from '../../components/contador/contador';
import ItemMeta from '../../components/itemMeta/item';
import ItemPlano from '../../components/itemPlano/plano';
import CartaoFilme from '../../components/cartaoFilme/filme';

export default function Comps() {

    const [novaMeta, setNovaMeta] = useState('');
    const [listaMetas, setListaMetas] = useState([]);
    const [editando, setEditando] = useState(-1);

    const [plano, setPlano] = useState('');
    const [situacao, setSituacao] = useState('');
    const [cor, setCor] = useState('');
    const [listaPlanos, setListaPlanos] = useState([]);

    const [nomeFilme, setNomeFilme] = useState('');
    const [classificacaoFilme, setClassificacaoFilme] = useState('');
    const [urlFilme, setUrlFilme] = useState('');
    const [estreiaFilme, setEstreiaFilme] = useState('');
    const [destaqueFilme, setDestaqueFilme] = useState(false);
    const [listaFilmes, setListaFilmes] = useState([]);

    function addMeta() {

        if (novaMeta !== '') {

            if (editando === -1) {

                setListaMetas([...listaMetas, novaMeta]);
                setNovaMeta('');
            } else {
                listaMetas[editando] = novaMeta;
                setListaMetas([...listaMetas])
                setNovaMeta('');
                setEditando(-1);
            }
        }
    }

    function teclaApertada(e) {
        if (e.key === 'Enter') {
            addMeta();
        }
    }

    function removerMeta(pos) {
        listaMetas.splice(pos, 1);
        setListaMetas([...listaMetas]);
    }

    function alterarMeta(pos) {
        setNovaMeta(listaMetas[pos]);
        setEditando(pos);
    }

    function adicionarPlano() {
        let novoPlano = {
            titulo: plano,
            tempo: situacao,
            tema: cor
        }

        setListaPlanos([...listaPlanos, novoPlano])

        setPlano('')
        setSituacao('')
        setCor('')

    }

    function adicionarFilme() {
        if (nomeFilme === '' || classificacaoFilme === '' || urlFilme === ''){
            alert('Preencha todos os campos.');
            return;
        }

        let novoFilme = {
            nome: nomeFilme,
            classificacao: classificacaoFilme,
            url: urlFilme
        }

        setListaFilmes([...listaFilmes, novoFilme]);
        setNomeFilme('')
        setClassificacaoFilme('')
        setUrlFilme('')

    }

    return (
        <div className='pagina-comps pagina'>
            <Cabecalho titulo='ReactJS | Componentes' />

            <div className='secao filmes'>
                <h1>Catálogo de Filmes</h1>

                <div className='entradas'>
                    <input type="text" placeholder='Nome do Filme' value={nomeFilme} onChange={e => setNomeFilme(e.target.value)} />
                    <input type="text" placeholder='Classificação' value={classificacaoFilme} onChange={e => setClassificacaoFilme(e.target.value)} />
                    <input type="text" placeholder='URL da Capa' value={urlFilme} onChange={e => setUrlFilme(e.target.value)} />

                    <button onClick={adicionarFilme}>Adicionar</button>

                </div>

                <div className='lista'>
                    {listaFilmes.map(item =>
                        <CartaoFilme item={item} />
                    )}
                </div>

            </div>


            <div className='secao planos'>
                <h1>Meus Planos atuais</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Meu plano aqui' value={plano} onChange={e => setPlano(e.target.value)} />
                    <input type="text" placeholder='Situação do plano aqui' value={situacao} onChange={e => setSituacao(e.target.value)} />
                    <input type="text" placeholder='Cor de identificação' value={cor} onChange={e => setCor(e.target.value)} />

                    <button onClick={adicionarPlano}>Adicionar plano</button>
                </div>

                <div className='lista'>
                    {listaPlanos.map((item, pos) =>
                        <ItemPlano item={item} />

                    )}


                </div>
            </div>

            <div className='secao'>
                <h1>Transformando o Contador em Componente</h1>

                <Contador titulo='Passos' fim={50} inicio={-50} plus={2} minus={2} />
                <Contador titulo='Erros' plus={5} minus={5} />

            </div>

            <div className='secao metas'>
                <h3>Transformando os itens da Lista de Metas em Componente</h3>
                <br />
                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta aqui' onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)} />
                    <button onClick={addMeta}>Adicionar</button>

                </div>

                <ul>
                    {listaMetas.map((item, pos) =>
                        <ItemMeta
                            pos={pos}
                            item={item}
                            removerMeta={removerMeta}
                            alterarMeta={alterarMeta} />
                    )}
                </ul>

            </div>



        </div>

    )
}
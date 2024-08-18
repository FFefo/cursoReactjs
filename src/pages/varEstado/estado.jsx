import './estado.scss';
import { useState } from 'react';
import Cabecalho from '../../components/cabeçalho/cabecalho';

export default function Estado() {

    const [novaMeta, setNovaMeta] = useState('');
    const [listaMetas, setListaMetas] = useState([])
    const [editando, setEditando] = useState(-1)

    const [plano, setPlano] = useState('');
    const [situacao, setSituacao] = useState('');
    const [cor, setCor] = useState('');
    const [listaPlanos, setListaPlanos] = useState([]);


    function teclaApertada(e) {
        if (e.key === 'Enter') {
            addMeta();
        }
    }

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

    return (
        <div className='pagina-estado pagina'>

            <Cabecalho titulo='Estudando ReactJS' />

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
                        <div className='plano'>
                            <div className='cor' style={{backgroundColor:item.tema}}>&nbsp;</div>
                            <div>
                                <h1>{item.titulo}</h1>
                                <h2>{item.tempo}</h2>
                            </div>
                        </div>


                    )}


                </div>
            </div>


            <section className='secao metas'>
                <h3>Metas para os próximos 5 anos</h3>
                <br />
                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta aqui' onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)} />
                    <button onClick={addMeta}>Adicionar</button>

                </div>

                <ul>
                    {listaMetas.map((item, pos) =>
                        <li key={pos}>
                            <i className='fa fa-pen-to-square' onClick={() => alterarMeta(pos)}></i> &nbsp;
                            <i className='fa fa-trash-can' onClick={() => removerMeta(pos)}></i> &nbsp;
                            {item}
                        </li>
                    )}
                </ul>

            </section>
        </div>
    )
}
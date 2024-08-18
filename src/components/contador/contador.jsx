import './contador.scss';

import { useState } from 'react';

export default function Contador(props) {
    const [contador, setContador] = useState(0);

    function aumentar () {
        if (contador < (props.fim  ?? 10)) {
            setContador(contador + props.plus)
        }
    }

    function diminuir() {
        if (contador > (props.inicio  ?? 0)) {
            setContador(contador - props.minus)
        }
    }

    return (
        <div className='comp-contador'>
            <div className='cont'>
                <h1> {props.titulo} </h1>

                <button onClick={aumentar}> + </button>
                {contador}
                <button onClick={diminuir}> - </button>
            </div>
        </div>
    )
}
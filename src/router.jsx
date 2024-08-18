import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/app/app';
import Contato from './pages/contato/contato';
import P404 from './pages/pagina_404/pag404';
import Eventos from './pages/eventos/eventos';
import Estado from './pages/varEstado/estado';
import Comps from './pages/comps/comps';

export default function Nav() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/eventos' element={<Eventos/>} />
                <Route path='/estado' element={<Estado/>} />
                <Route path='/comps' element={<Comps/>} />

                <Route path='*' element={<P404 />} />
            </Routes>
        </BrowserRouter>)
}
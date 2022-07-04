import { Link } from 'react-router-dom'
import './erro.css';


function Erro(){

 return(
    <div className="not-fount">
        <h1>404</h1>
        <h3>Pagina não encontrada</h3>
        <Link to="/">Home</Link>
    </div>
 );
}

export default Erro;
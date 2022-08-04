import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


import './favoritos.css';


function Favoritos(){

    const [filmes, setFilmes] = useState([]);

useEffect(() =>{
    // Se tiver alguma coisa no localStorage ira passar para um objeto ou array
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || [])
    

},[]); 

// Removendo o filme dos favoritos e devolvendo os filmes que tenha id diferende de filmes
function excluirFilme(id){
    let filtros = filmes.filter((item) =>{
        return (item.id !== id)
    })
    // Usando a variavel filtros para fazer a exclusão do filmo no localStorage
    setFilmes(filtros);
    localStorage.setItem("@primeflix", JSON.stringify(filtros))
    toast.success("Filme removido com sucesso!")
   
}


return(
    <div className="meus-filmes">
        <h2>Meus Filmes</h2>
        {filmes.length === 0 && <span>Você não possui filmes salvo</span>}

        <ul>
            {filmes.map((item)=>{
                return(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/filme/${item.id}`}> Ver detalhes</Link>
                            <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
   
)

}

export default Favoritos;
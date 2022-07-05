import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './filme.css';

import api from '../../services/api';

function Filme(){

    const navigate = useNavigate();
    const { id } = useParams();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{

        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "9df8ec207288b14d39f6eddd67d7bb93",
                    language: "pt-BR",
                }
            })
            .then((resposta)=>{
                setFilme(resposta.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Não encontrado")
                navigate("/", { replace: true });
                return;
            })

        }

        loadFilme();

        return() =>{
            console.log("Componente desmontado");
        }
    }, [id, navigate])

    if(loading){
        return(
            <div className="filme-load">
                <div className="spinner"></div>
            </div>
        )
    }

    return(
         <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className='area-buttons'>
                <button>Salvar</button>
                <button>
                    <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer Portugues`}>
                        Trailer
                    </a>
                </button>
            </div>
         </div>

    
   
    )
   }
   
   export default Filme;
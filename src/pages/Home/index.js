import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

// https://api.themoviedb.org/3/movie/now_playing?api_key=9df8ec207288b14d39f6eddd67d7bb93&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

        useEffect(()=>{
                
            // função de uma que requisição HTTP
            async function loadFilmes(){

                const response = await api.get("movie/now_playing",{
                    params: {
                        api_key: "9df8ec207288b14d39f6eddd67d7bb93",
                        language: "pt-BR",
                        page: 1,
                    }
                })

                console.log(response.data.results.slice(0, 10)); // a quantidade de objetos de retorno

                setFilmes(response.data.results.slice(0, 10));
                setLoading(false)
            }

            loadFilmes();

        }, [])

        if(loading){
            return(
                <div className="filme-load">
                    <div className="spinner"></div>
                </div>
            )
        }
       
    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                    )
                })}
            </div>
        </div>
 )
}

export default Home;
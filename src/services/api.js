//  https://api.themoviedb.org/3/movie/now_playing?api_key=9df8ec207288b14d39f6eddd67d7bb93&language=pt-BR
//  https://api.themoviedb.org/3/

import axios from 'axios';

const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
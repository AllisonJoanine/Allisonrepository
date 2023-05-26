import axios from "axios";//Está importando uma biblioteca Axios para leitura de http

//18075480/json/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
 });//Neste código está dizendo que todas as pesquisas feitas serão pesquisadas por está fonte

 export default api;//Serve para tornar acessivel para outros arquivos, tornando assim padrão
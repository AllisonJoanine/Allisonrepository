import { useState } from 'react';/*Está sendo importado a biblioteca useState, permitindo estabelecer um estado a
um componente funcional*/
import { FiSearch} from 'react-icons/fi';//Nesta linha está sendo importado da biblioteca de icone do react
import './style.css';//Está sendo importado de outra pasta a estilização dos itens visiveis no site

import api from './services/api';/*Nesta linha está sendo importada uma pasta em que está utilizando uma biblioteca
axios para criar uma função API que leia o http*/

function App() {

  const[input, setInput] = useState('');/*Nesta linha está sendo declarado que a string será iniciada vazia*/
  const [cep, setCep] = useState({});/*Nessa linha a variável cep está sendo inicializada 
  com um objeto vazio, como seu valor inicial, o setCep, serve para atualizar o valor*/

  async function handleSearch(){    

    if(input ===''){
      alert("Preencha algum CEP!")
      return;
    }//Nesta condição está dizendo que se o input estiver vazio '', irá aparecer um alerta

    try{
      const response = await api.get(`${input}/json`);//Está sendo buscado os dados do CEP no formato JSON
      setCep(response.data);//Os dados do CEP são armazenados na variável cep.
      setInput(""); //Limpar o campo
    }catch{
      alert("Ops erro ao buscar");//Caso não corresponda será emitido um alerta de erro
      setInput("")//Limpa o campo
    }
  }//Nessas linhas de Try e Catch, está dizendo que 

  return (
    <div className="container">
      <h1 className='title'>BUSCADOR CEP</h1>

      <div className="containerInput">
        
        <input type="text" placeholder="Digite seu cep..." value={input} onChange={(e) => setInput(e.target.value) } />
       
        <button className="buttonSearch" onClick={handleSearch}><FiSearch size={25} color='#fff'/></button>
      </div>

      {Object.keys(cep).length > 0 &&( //verifica se o objeto cep possui alguma informação na biblioteca que bata
      
      //Nas linhas <h2> e <span> está sendo aplicado as informações que batem com o objeto cep 
      <main className='main'>
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span> 
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>

      </main>
      )}
      
    </div>
  );
}

export default App;// Está exportando o App como um valor padrão

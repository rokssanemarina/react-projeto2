import Axios from "Axios";
import { useState, useEffect } from "react";

export function Search() {
  const [repo, setRepos] = useState([]); // estado para fazer o consumo da API 
  const [repoBuscado , setRepoBuscado] = useState ('') // a string vazia é referente ao input que vai ser colocado para encontrar o que se pesquisa
  const [repoFiltrados, setRepoFiltrados] = useState([])

  const baseURL = "https://api.github.com/users/rokssanemarina/repos"; // link direto da API


  useEffect(()=>{
    async function getData (){
        const response = await Axios.get (baseURL) // consumo da API
        setRepos (response.data) // guardar os dados na variavel 
    } getData ()
  }, [])

  function handleSearch (event){
    setRepoBuscado(event.target.value)
  }

  useEffect(()=> {
    setRepoFiltrados(repo.filter(repo =>{
        return repo.name.includes(repoBuscado)
    }))
  }, [repo,repoBuscado])


  return (
   <>
   <div className="pesquisando">
   <h2 >Meus repositórios </h2>
   <input type="text" placeholder="encontre o repositorio" onChange={handleSearch} className="pesquisa" />
   </div>
   {repoFiltrados.map (repo => {
    return (
        <div className="general">
            <div>
            <p key={repo.name}>{repo.name}</p>
            <a  className="link" href= {repo.html_url}>confere aqui </a>
            </div>
        </div>
    )
   })

   }
   </>
  );
}

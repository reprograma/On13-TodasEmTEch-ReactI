import filmes from '../data/database'

const List = () => {
  return(
    <ul>
      {filmes.map(filme => 
        <li key={filme.id}>{filme.nome}</li>
      )}
    </ul>
  )
}

export default List
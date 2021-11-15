function Relogio() {
  const horario = new Date().toLocaleTimeString()
  
  return(
    <h1>{horario}</h1>  
  )
}

export default Relogio
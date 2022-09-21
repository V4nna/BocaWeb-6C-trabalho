export const Busca = ({busca, buscaODA}) => {
    return(
        <div className = 'busca'>
          <div className="spanBusca">
            <iconBusca className="imgBusca" />
            <input
              name= 'busca'
              type = 'text'
              value = {busca}
              placeholder = 'O que deseja buscar'
              onChange = {buscaODA}
            />
          </div>
        </div>
    )
}
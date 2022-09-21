import logobocaweb from'../../logobocaweb.png'

export const Cabecalho = () => {
  return(
    <header>
      <div className="wholeLogo">
          <img src={logobocaweb} className="logo" alt="logo do bocaweb" />
          <h2 className="nomeSite">boca web</h2>
      </div>
    </header>
  )
}
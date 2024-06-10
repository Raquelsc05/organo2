import { IoCloseCircle } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar(){
    aoFavoritar(colaborador.id)
  }

 
  const propsfavorito = {
   onClick: favoritar,
   size: 25
}
  return (
    <div className="colaborador">
      <IoCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <FaHeart {...propsfavorito} color='#ff0000'/>
          ) : (
            <FaRegHeart {...propsfavorito} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Colaborador

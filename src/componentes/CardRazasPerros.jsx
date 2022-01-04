import {Link} from 'react-router-dom';

function CardRazasPerros({paginaRaza, color, imagen, nombreRaza}){
    return(
        <li className="breedCard">
            <Link to={paginaRaza}>
                <div className={color}>
                    <div className="contenedorImagen">
                        <img src={imagen} alt={nombreRaza}/>
                    </div>
                    <span className="breedTitle">{nombreRaza}</span>
                </div>
            </Link>

        </li>
    );
}

export default CardRazasPerros;
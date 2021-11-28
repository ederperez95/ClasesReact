function CardRazasPerros(props){
    return(
        <li className="breedCard">
            <div className={props.color}>
                <div className="contenedorImagen">
                    <img src={props.imagen} alt={props.nombreRaza}/>
                </div>
                <span className="breedTitle">{props.nombreRaza}</span>
            </div>
        </li>
    );
}

export default CardRazasPerros;
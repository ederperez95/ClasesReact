import logo1 from 'media/cocktail_dog_animal_15960.png';

const Header = () =>{
    return (
    <header>
            <ul className="navbar">

                <li>
                    <img src={logo1} alt="imagen" className="logo"/>
                </li> 
                <li>
                    <button className="button mainButton">Nuevo post</button>
                </li>
                <li>
                    <div className="buscar">
                        <input placeholder="Buscar una raza" type="text"/>
                        <i className="fas fa-search buscarGenerico iconoBusqueda"></i>
                    </div>
                </li>

                <li>
                    <button className="button secondaryButton">Login</button>
                </li>
                <li>
                    <button className="button mainButton">Registro</button>
                </li>
            </ul>

        </header>
    );
}

export default Header; 
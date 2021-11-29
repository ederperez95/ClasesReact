import CardRazasPerros from "componentes/CardRazasPerros";
import 'styles/styles.css';
import boderCollie from 'media/Border-collie.jpg';
import rhodesian from 'media/Rodesian.jpg';
import logo1 from 'media/cocktail_dog_animal_15960.png';



function Index(){
    return (
        <div className="App">
        <header>
            <div>
                Hola mundo esto es un div
            </div>
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
        <main>
            <section></section>
            <section>
                <h1>Razas de Perros</h1>
                <ul className="breedCardContainer">
                    <CardRazasPerros nombreRaza='Border Collie' imagen={boderCollie} />         
                    <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian} />
                </ul>
            </section>
            <section></section>
        </main>
        <footer>
           
           
  
        </footer>
      </div>
    );
}

export default Index;
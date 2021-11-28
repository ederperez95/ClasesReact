import logo from './logo.svg';
import './styles/styles.css';
import boderCollie from './media/Border-collie.jpg';
import rhodesian from './media/Rodesian.jpg';
import logo1 from './media/cocktail_dog_animal_15960.png';

function App() {
  return (
    <div className="App">
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
      <main>
          <section></section>
          <section>
              <h1>Razas de Perros</h1>
              <ul className="breedCardContainer">
                  <li className="breedCard">
                      <div className="contenedorImagen">
                          <img src={boderCollie} alt="Foto de border Border-collie"/>
                      </div>
                      <span className="breedTitle">Border Collie</span>
                  </li>             
                  <li className="breedCard">
                      <div className="contenedorImagen">
                          <img src={rhodesian} alt="Foto de Rhodesian"/>
                      </div>
                      <span className="breedTitle">Rhodesian</span>
                  </li>
              </ul>
          </section>
          <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

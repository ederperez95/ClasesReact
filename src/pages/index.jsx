import CardRazasPerros from "componentes/CardRazasPerros";
import 'styles/styles.css';
import boderCollie from 'media/Border-collie.jpg';
import rhodesian from 'media/Rodesian.jpg';




function Index(){
    return (
        <div className="App">

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
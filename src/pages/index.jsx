import CardRazasPerros from "componentes/CardRazasPerros";
import 'styles/styles.css';
import boderCollie from 'media/Border-collie.jpg';
import rhodesian from 'media/Rodesian.jpg';






function Index(){
    return (
        <section>
            <h1>Razas de Perros</h1>
            <ul className="breedCardContainer">
                <CardRazasPerros paginaRaza='/borderCollie' nombreRaza='Border Collie' imagen={boderCollie} />         
                <CardRazasPerros paginaRaza='/rhodesian' nombreRaza='Rhodesian' imagen={rhodesian} />
            </ul>
        </section>
    );
}

export default Index;